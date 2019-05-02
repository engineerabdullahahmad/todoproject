import React from 'react';
import {
Stylesheet,Text,Veiw,TextInput,
ScrollView,TouchableOpacity,
} from 'react-native';
import Note from'./Note';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            noteArray:[],
        noteText:'',
    }
    }
    render(){
        let notes = this.state.noteArray.map((val,key) => {
            return <Note key={key} keyval={key} val={val}
             deleteMethode={ ( ) => this.deleteNote(key)}/>
        });
        return(
            <View Style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>- Noter -</Text>
            </View>
            <ScrollView style={styles.scrollcontainer}>

            </ScrollView>
            <View style={styles.footer}>
            <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholder='>note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>

            </TextInput>

            </View>
            <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            </View>
        )};
        addNote(){
            if (this.state.noteText){
                var d = new DragEvent();
                this.state.noteArray.push({
                    'date': d.getFullYear() + 
                    "/"+(d.getMonth()+1) +
                    "/"+d.getModifierState(),
                    'note':this.state.noteText
                });
                this.setState({noteArray: this.state.noteArray})
                this.setState({noteText:' '});
            }
        }
        deleteNote(key){
            this.state.noteArray.splice(key,1);
            this.setState.setState({noteArray:this.state.noteArray})
        }
    }

const styles =StyleSheet.create({
    container:{flex:1,
    },
    header: {
        backgroundColor:'#E91E63',
        alignItems:'center',
        justifycontent:'center',
        borderBottomWidth: 10,
        bprderBottomColor:'#ddd'
    },headerText:{color:'white',
    fontSize:18,
    padding:26
    },scrollcontainer:{
        flex:1,
        marginBottom:100,
    },footer:
    {position:'absolute',
bpttom:0,
left:0,
right:0,
zIndex:10},
TextInput:
{alingSelf:'strech',
color:'#fff',
padding:20,
backgroundColor:'#252525',
borderTopwidth:2,
borderTopColor:'#ededed'},
addButton:{
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#E91E63',
    width:90,
    height:90,
    borderRadius:50,
    alignItems:'center',
    justifycontent:'center',
    elevation:8,
},addButtonText:{
color:'#fff',
fontSize:24,
}
})