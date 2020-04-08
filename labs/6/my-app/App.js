import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import Questions from './Questions/index.js';



class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ffe1cf',
          alignItems: 'center',
          borderWidth: 20,
          margin: 10,
          borderColor: '#800000'
        },
        title: {
          padding:20,
          fontSize: 40,
          color: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 200,
          paddingBottom: 100,
          fontWeight: "bold"
        },
        question: {
          padding: 20,
          marginTop:100,
          color: 'black',
          marginBottom: 50,
          fontSize: 25,
          fontWeight: "bold"
          
        },
        
      }),      
      questions: [
        {
          question: 'Which of these was an early example of a social network site?',
          answerTrue: 'Six Degrees',
          answerFalseOne: 'Ello',
          answerFalseTwo: 'Slack',
          answerFalse: 'Mastodon',
        },
        {
          question: 'Which of these is NOT a social platform?',
          answerFalseOne:'Facebook',
          answerFalseTwo: 'Youtube',
          answerTrue: 'NPR',
          answerFalse: 'WhatsApp'
        },
        {
          question: 'Approximately how much of web traffic is bots?',
          answerFalseOne: '75%',
          answerFalseTwo: '25%',
          answerTrue: ' 50%',
          answerFalse: 'No web traffic is from bots'
        },
        {
          question: 'What is ELIZA?',
          answerFalseOne: 'A propaganda bot',
          answerTrue: 'A coversation bot',
          answerFalseTwo: 'An alternative to Twitter for shring content',
          answerFalse: 'A tool for online conversations'
        },
        {
          question: 'In JSON, what is an array?',
          answerFalseOne:'Insurance A list of strings idexed numerically',
          answerTrue: 'A collection of values indexed numerically',
          answerFalseTwo: 'A collection of objects organized by their value',
          answerFalse:'A list of symbols'
        },
        {
          question: 'What is Tracery?',
          answerFalseOne:'A library for machine learning',
          answerTrue: 'A grammar for creating procedural texts',
          answerFalseTwo: 'A tool for making propaganda',
          answerFalse: 'A way of tracking behaviour across platforms'
        }
      ]
    }
  }
  render() {
    return(
      <View style={this.state.styles.container}>
        <Questions state={this.state} />
      </View>
    );
  }
}

export default Quiz;