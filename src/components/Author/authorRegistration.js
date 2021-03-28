import React,{useState} from "react"
import { View, Text, Alert, ScrollView, StatusBar, TouchableOpacity, StyleSheet} from "react-native"

import Forml from '../Forml'
import { getData, storeData } from '../../Store'

const AuthorRegistration = () => {
  const formState = {
    name: "",
    age: "",
    nameBook: "",
    cpf: "",

  }

  const [form, setForm] = useState(formState)

  function handleChange(value, name) {
    setForm({...form, [name]: value})
  }

  async function checkData() {
    if ((form.name, form.age, form.nameBook, form.cpf) === "") { 
      return Alert.alert("Preencha todos os campos!")
    } else {
      try {
        const newAuthor = JSON.stringify([form])

        await storeData('@authors', newAuthor)
        const feedback = await getData('@authors')
        console.log(feedback)

        return Alert.alert("Cadastro realizado com sucesso!")

      } catch(error) {
        Alert.alert(error)
      }

    }
  }
 
  return (
    <ScrollView>
      <View>
        <StatusBar style="auto" />
        <Forml nameField={"Nome do Autor: "} event={text => handleChange(text, "name")} />
        <Forml nameField={"Idade: "} event={text => handleChange(text, "age")} isNumeric={true} />
        <Forml nameField={"Nome do livro: "} event={text => handleChange(text, "nameBook")} />
        <Forml nameField={"CPF: "} event={text => handleChange(text, "cpf")} /> 

      <TouchableOpacity
        style={styles.button}
        onPress={() => checkData()}
        >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 15
  },
  scrollView: {
    marginVertical: 60,
    marginHorizontal: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  }
})

export default AuthorRegistration
