import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function Home() {

  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    {
      id: '1',
      nome: 'Tênis Esportivo',
      categoria: 'Corrida',
      preco: 199.90,
      emoji: '👟'
    },
    {
      id: '2',
      nome: 'Camisa de Futebol',
      categoria: 'Futebol',
      preco: 89.90,
      emoji: '⚽'
    },
    {
      id: '3',
      nome: 'Bola de Futebol',
      categoria: 'Futebol',
      preco: 119.90,
      emoji: '⚽'
    },
    {
      id: '4',
      nome: 'Luvas de Academia',
      categoria: 'Academia',
      preco: 49.90,
      emoji: '🏋️'
    },
    {
      id: '5',
      nome: 'Shorts Esportivo',
      categoria: 'Corrida',
      preco: 69.90,
      emoji: '🩳'
    },
    {
      id: '6',
      nome: 'Garrafa Esportiva',
      categoria: 'Acessórios',
      preco: 39.90,
      emoji: '🥤'
    },
    {
      id: '7',
      nome: 'Raquete de Tênis',
      categoria: 'Tênis',
      preco: 249.90,
      emoji: '🎾'
    },
    {
      id: '8',
      nome: 'Mochila Esportiva',
      categoria: 'Acessórios',
      preco: 129.90,
      emoji: '🎒'
    }
  ];

  function adicionarCarrinho(produto) {

    setCarrinho([...carrinho, produto]);

    Alert.alert(
      'Produto adicionado!',
      produto.nome + ' foi adicionado ao carrinho.'
    );
  }

  function visualizarCarrinho() {

    if (carrinho.length === 0) {
      Alert.alert(
        'Carrinho vazio',
        'Você ainda não adicionou nenhum produto.'
      );

      return;
    }

    let total = carrinho.reduce(
      (soma, produto) => soma + produto.preco,
      0
    );

    Alert.alert(
      'Seu carrinho',
      'Produtos: ' +
        carrinho.length +
        '\nTotal: R$ ' +
        total.toFixed(2)
    );
  }

  function finalizarCompra() {

    if (carrinho.length === 0) {

      Alert.alert(
        'Carrinho vazio',
        'Adicione algum produto antes de comprar.'
      );

      return;
    }

    let total = carrinho.reduce(
      (soma, produto) => soma + produto.preco,
      0
    );

    Alert.alert(
      'Compra realizada!',
      'Obrigado pela compra!\n\nTotal: R$ ' +
        total.toFixed(2)
    );

    setCarrinho([]);
  }

  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );

  function mostrarOferta() {

    Alert.alert(
      '🔥 OFERTA ESPECIAL',
      'Até 30% de desconto em produtos esportivos!'
    );
  }

  function selecionarCategoria(categoria) {

    Alert.alert(
      'Categoria',
      'Você selecionou: ' + categoria
    );
  }

  function renderProduto({ item }) {

    return (

      <View style={styles.produto}>

        <View style={styles.imagem}>

          <Text style={styles.emoji}>
            {item.emoji}
          </Text>

        </View>

        <Text style={styles.nome}>
          {item.nome}
        </Text>

        <Text style={styles.categoria}>
          {item.categoria}
        </Text>

        <Text style={styles.preco}>
          R$ {item.preco.toFixed(2)}
        </Text>

        <TouchableOpacity
          style={styles.botaoComprar}
          onPress={() => adicionarCarrinho(item)}
        >

          <Text style={styles.textoBotao}>
            ADICIONAR
          </Text>

        </TouchableOpacity>

      </View>
    );
  }

  return (

    <View style={styles.container}>

      {/* CABEÇALHO */}

      <View style={styles.header}>

        <View>

          <Text style={styles.logo}>
            SPORT+
          </Text>

          <Text style={styles.subLogo}>
            Sua loja esportiva
          </Text>

        </View>

        <TouchableOpacity
          style={styles.carrinho}
          onPress={visualizarCarrinho}
        >

          <Text style={styles.carrinhoTexto}>
            🛒 {carrinho.length}
          </Text>

        </TouchableOpacity>

      </View>


      {/* BANNER */}

      <View style={styles.banner}>

        <Text style={styles.bannerTitulo}>
          SEU ESPORTE.
        </Text>

        <Text style={styles.bannerTitulo}>
          SEU ESTILO.
        </Text>

        <Text style={styles.bannerTexto}>
          Os melhores produtos esportivos
          em um só lugar!
        </Text>

        <TouchableOpacity
          style={styles.botaoOferta}
          onPress={mostrarOferta}
        >

          <Text style={styles.textoOferta}>
            VER OFERTAS
          </Text>

        </TouchableOpacity>

      </View>


      {/* CATEGORIAS */}

      <Text style={styles.tituloCategoria}>
        Categorias
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollCategorias}
      >

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => selecionarCategoria('Futebol')}
        >

          <Text style={styles.categoriaTexto}>
            ⚽ Futebol
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => selecionarCategoria('Corrida')}
        >

          <Text style={styles.categoriaTexto}>
            🏃 Corrida
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => selecionarCategoria('Academia')}
        >

          <Text style={styles.categoriaTexto}>
            🏋️ Academia
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => selecionarCategoria('Tênis')}
        >

          <Text style={styles.categoriaTexto}>
            🎾 Tênis
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoriaBotao}
          onPress={() => selecionarCategoria('Acessórios')}
        >

          <Text style={styles.categoriaTexto}>
            🎒 Acessórios
          </Text>

        </TouchableOpacity>

      </ScrollView>


      {/* TÍTULO */}

      <Text style={styles.tituloProdutos}>
        Produtos em destaque
      </Text>


      {/* LISTA DE PRODUTOS */}

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderProduto}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />


      {/* BOTÃO FINALIZAR */}

      {carrinho.length > 0 && (

        <TouchableOpacity
          style={styles.finalizar}
          onPress={finalizarCompra}
        >

          <Text style={styles.finalizarTexto}>
            FINALIZAR COMPRA
          </Text>

          <Text style={styles.finalizarPreco}>
            R$ {total.toFixed(2)}
          </Text>

        </TouchableOpacity>

      )}

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F4F6'
  },


  /* CABEÇALHO */

  header: {
    backgroundColor: '#111827',
    paddingTop: 45,
    paddingBottom: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    color: '#22C55E',
    fontSize: 30,
    fontWeight: 'bold'
  },

  subLogo: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 2
  },

  carrinho: {
    backgroundColor: '#22C55E',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25
  },

  carrinhoTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  },


  /* BANNER */

  banner: {
    backgroundColor: '#16A34A',
    margin: 15,
    padding: 20,
    borderRadius: 15
  },

  bannerTitulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold'
  },

  bannerTexto: {
    color: '#DCFCE7',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20
  },

  botaoOferta: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    paddingVertical: 11,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },

  textoOferta: {
    color: '#15803D',
    fontWeight: 'bold'
  },


  /* CATEGORIAS */

  tituloCategoria: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 15,
    marginBottom: 8
  },

  scrollCategorias: {
    paddingLeft: 15,
    maxHeight: 50
  },

  categoriaBotao: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB'
  },

  categoriaTexto: {
    color: '#111827',
    fontWeight: '500'
  },


  /* PRODUTOS */

  tituloProdutos: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 12
  },

  lista: {
    paddingHorizontal: 10,
    paddingBottom: 100
  },

  linha: {
    justifyContent: 'space-between'
  },

  produto: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    marginBottom: 15,
    padding: 12,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },

    elevation: 3
  },

  imagem: {
    height: 110,
    backgroundColor: '#DCFCE7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  emoji: {
    fontSize: 55
  },

  nome: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold'
  },

  categoria: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 3
  },

  preco: {
    color: '#16A34A',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 10
  },


  /* BOTÃO COMPRAR */

  botaoComprar: {
    backgroundColor: '#111827',
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },


  /* FINALIZAR */

  finalizar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    backgroundColor: '#16A34A',
    padding: 14,
    borderRadius: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 6
  },

  finalizarTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  finalizarPreco: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  }

});