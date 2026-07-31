import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Ilê Axé - Artigos Religiosos
      </Text>

      <Text style={styles.subtitulo}>
        Candomblé • Umbanda • Cultura Africana
      </Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
        }}
        style={styles.banner}
      />

      <Text style={styles.secao}>
        Produtos Religiosos
      </Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1603006905003-be475563bc59',
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          Charutos e Cachimbos para Entidades
        </Text>

        <Text style={styles.descricao}>
          Produtos selecionados para trabalhos espirituais,
          oferendas e práticas religiosas.
        </Text>
      </View>


      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1594736797933-d0e6f9f3f3c8',
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          Imagens de Orixás e Entidades
        </Text>

        <Text style={styles.descricao}>
          Representações de Orixás, Guias e forças espirituais.
        </Text>
      </View>


      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          Elementos Africanos
        </Text>

        <Text style={styles.descricao}>
          Colares, búzios, tecidos africanos e objetos culturais.
        </Text>
      </View>


      <Text style={styles.secao}>
        Pesquise um produto
      </Text>

      <TextInput
        placeholder="Digite o que procura..."
        style={styles.input}
      />

    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container:{
    backgroundColor:'#140b05',
    padding:20,
  },

  titulo:{
    color:'#d4af37',
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:30,
  },

  subtitulo:{
    color:'#fff',
    textAlign:'center',
    marginBottom:20,
  },

  banner:{
    width:'100%',
    height:220,
    borderRadius:15,
  },

  secao:{
    color:'#d4af37',
    fontSize:22,
    fontWeight:'bold',
    marginTop:25,
    marginBottom:15,
  },

  card:{
    backgroundColor:'#25150b',
    borderRadius:15,
    padding:15,
    marginBottom:20,
  },

  imagem:{
    width:'100%',
    height:180,
    borderRadius:10,
  },

  nome:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    marginTop:10,
  },

  descricao:{
    color:'#ccc',
    marginTop:5,
  },

  input:{
    backgroundColor:'#fff',
    height:45,
    borderRadius:10,
    paddingHorizontal:15,
    marginBottom:40,
  }

});


export default App;