import React from 'react';
import {
Stylesheet,
Text,
Veiw,
TouchableOpacity,
} from 'react-native';
export default class Note extends React.Component{
    render(){
        return(
            <view key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}>{this.props.val.date}</Text>
            <Text style={styles.noteText}>{this.props.val.date}</Text>
            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>D</Text>
            </TouchableOpacity>
            </view>
            
        )
    }
}
const styles =StyleSheet.create({
    note:{position:'relative',
padding:20,
paddingRight:100,
borderBottomWidth:2,
borderBottomColor:'#',
},noteText:{
    paddingleft:20,
    borderBottomWidth:10,
    borderBottomColor:'#E91E63',
},
noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2980b9',
    padding:10,
    top:10,
    bottom:10,
    right:10
},
noteDeleteText: {color:"white"}
});