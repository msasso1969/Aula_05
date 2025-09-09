import {StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  
  titulo1:{
    fontSize: 20,  
    fontStyle:'italic',
    fontWeight: 'bold',
    textAlign:'center',
    color:'#00c'
  },
  
  cx1:{
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor:'#f00',
    alignSelf:'center'
  },
  
  cx2:{
    width: 250,
    height: 200,
    backgroundColor: '#0ff',
    marginLeft:20
  },
  
  titulo2:{
    color:'#f00',
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle:'italic',
    marginLeft: 300
  },
});

export default mascara; //Para exportar o conteúdo 

