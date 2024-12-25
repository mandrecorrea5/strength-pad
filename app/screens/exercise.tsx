import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Container, SafeContainer, Section } from "../styles";
import { useState } from "react";
import { Alert, FlatList, Modal } from "react-native";
import styled from "styled-components/native";
import * as Yup from 'yup';
import uuid from 'react-native-uuid'
import { Formik } from "formik";
import CustomInput from "@/components/CustomInput";
import CustomButtom from "@/components/CustomButtom";
import { Ionicons } from "@expo/vector-icons";

type Exercise = {
  id?: string;
  name: string;
  abbreviation: string;
  translation: string;
}

const mockExercises: Exercise[] = [
  {
    id: 'uuid1',
    name: 'Arranco em Força',
    abbreviation: 'AF',
    translation: 'Muscle Snatch'
  },
  {
    id: 'uuid2',
    name: 'Arranco em Pé',
    abbreviation: 'APe',
    translation: 'Power Snatch'
  },
  {
    id: 'uuid3',
    name: 'Arranco Técnico',
    abbreviation: 'ATec',
    translation: 'Squat Snatch'
  }
]

export default function ExerciseScreen() {
  const [exercises, setExercises] = useState<Exercise[]>(mockExercises);
  const [showModal, setShowModal] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);

  const inititalValues: Exercise = {
    name: editingExercise?.name || '',
    abbreviation: editingExercise?.abbreviation || '',
    translation: editingExercise?.translation || ''
  }


  const handleSaveExercise = (values: Exercise) => {
    if (editingExercise) {
      setExercises((prev) => prev.map((item) => {
        if (item.id === editingExercise.id) {
          return {
            ...item,
            ...values
          }
        }
        return item;
      }));
    } else {
      const newId = uuid.v4();
      setExercises([...exercises, {
        id: newId,
        ...values
      }]);
    }
    setEditingExercise(null);
    setShowModal(false);
    Alert.alert('Exercício Salvo', 'Exercício salvo com sucesso');
  };

  const handleDeleteExercise = (id: string) => {
    console.log('id', id);
    Alert.alert('Exercício Excluído', 'Tem certeza que deseja excluir o exercício?', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          setExercises((prev) => prev.filter((item) => {
            if (item.id) {
              return item.id !== id;
            }

            return item.abbreviation !== id;
          }));
        }
      }
    ]);
  }

  return (
    <SafeContainer>
      <Section>
        <ThemedText type='subtitle'>Cadastro de Exercício</ThemedText>
      </Section>
      <Section>
        <ExerciseList>
          <FlatList
            data={exercises}
            renderItem={({ item }) => (
              <ExerciseItem>
                <ExerciseText>{item.abbreviation} - {item.name}</ExerciseText>
                <Actions>
                  <ActionButton onPress={() => {
                    setEditingExercise(item);
                    setShowModal(true);
                  }}>
                    <Ionicons name="create-outline" size={20} color="blue" />
                  </ActionButton>
                  <ActionButton onPress={() => handleDeleteExercise(item.id || item.abbreviation)}>
                    <Ionicons name="trash-outline" size={20} color="red" />
                  </ActionButton>
                </Actions>
              </ExerciseItem>
            )}
            keyExtractor={item => item.id || item.abbreviation + item.name}
            ListHeaderComponent={<ListHeader>Exercícios Cadastrados</ListHeader>}
          />
        </ExerciseList>
      </Section>
      <Section>
        {/* Botão para Abrir Formulário */}
        <AddButton onPress={() => setShowModal(true)}>
          <AddButtonText>Cadastrar Novo Exercício</AddButtonText>
        </AddButton>
      </Section>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <ModalContainer>
          <Formik
            initialValues={inititalValues}
            validationSchema={ExerciseSchema}
            onSubmit={(values: Exercise) => handleSaveExercise(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <Form>
                <CustomInput
                  title="Nome"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  error={errors.name}
                  size="large"
                />

                <CustomInput
                  title="Abreviação"
                  onChangeText={handleChange('abbreviation')}
                  onBlur={handleBlur('abbreviation')}
                  value={values.abbreviation}
                  error={errors.abbreviation}
                  size="large"
                />

                <CustomInput
                  title="Tradução Inglês"
                  onChangeText={handleChange('translation')}
                  onBlur={handleBlur('translation')}
                  value={values.translation}
                  error={errors.translation}
                  size="large"
                />

                <CustomButtom onPress={() => handleSubmit()} title="Salvar Exercício" />
              </Form>
            )}
          </Formik>
        </ModalContainer>
      </Modal>
    </SafeContainer>
  );
}

const ExerciseList = styled.View`
  width: 100%;
  padding: 10px;  
`;

const ExerciseItem = styled.View`
 flex-direction: row;
 gap: 10px;  
 align-items: center;
 justify-content: space-between;
  padding: 10px 5px;
  border-bottom-width: 1px;
  border-color: #ddd;  
`;

const ExerciseText = styled.Text`
  font-size: 16px;
`;

const ListHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  margin-top: 20px;
  align-items: center;
  border-radius: 10px;
`;

const AddButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ExerciseSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  abbreviation: Yup.string().required("Abreviação é obrigatória"),
  translation: Yup.string()
});

const Form = styled.View`
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;    
  width: 25%;
`;

const ActionButton = styled.TouchableOpacity`
  padding: 5px;
`;