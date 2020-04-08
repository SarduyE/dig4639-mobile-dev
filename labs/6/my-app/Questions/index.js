import React from "react";
import {View, Text, Button} from "react-native";

class question extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = props.state;
        this.state.question = 0;
        this.state.correct = 0;
        console.log(this.state.questions.length);
    }
    incrementquestion() {
        console.log('AFTER THIS_____________________');
        console.log(this)
        this.setState({question: this.state.question + 1})
        return true;
    }
    answerTrue() {
        this.setState({correct: this.state.correct + 1})
        this.incrementquestion()
    }
    render() {
        if (this.state.question === 0) {
            // show the home screen
            return(
                <>
                    <View>
                        <Text style={this.state.styles.title}>A Social Platforms Quiz!!</Text>
                    </View>
                    <View style={[{ width: "50%", 
                    margin: 20, 
                    backgroundColor: "#cc4125",
                     fontSize: 40,
                     shadowColor: "#000",
                     shadowOffset: {
                       width: 0,
                       height: 4,
                      },
                      shadowOpacity: 0.30,
                      shadowRadius: 4.65,
                      elevation: 8, }]}>
  
                    <Button
                        onPress={this.incrementquestion.bind(this)}
                        title="Press here to begin."
                        color="black"
                        accessibilityLabel="Press to begin"
                        />
                  
                        </View>

                </>
            );
        } else if (this.state.question > this.state.questions.length) {
            return(
                <>
                    <View>
                        <Text style={this.state.styles.title}>
                          The End!
                          </Text>
                    </View>
                    <View>

                    </View>
                    <View>
                        <Text style={[{fontSize: 20,}]}>
                          You got {this.state.correct} out of {this.state.questions.length} right.
                          </Text>
                    </View>
                </>
            );
        } else {
            return(
                <>
                    <View>
                        <Text style={this.state.styles.question}>
                          {this.state.questions[this.state.question - 1].question}</Text>
                    </View>
                  
                    <View style={[{ width: "90%", 
                    margin: 20, 
                    backgroundColor: "#cc4125",
                     fontSize: 40,
                     shadowColor: "#000",
                     shadowOffset: {
                       width: 0,
                       height: 4,
                      },
                      shadowOpacity: 0.30,
                      shadowRadius: 4.65,
                      elevation: 8, }]}>
                        <Button
                            onPress={this.incrementquestion.bind(this)}
                            title={this.state.questions[this.state.question - 1].answerFalse}
                            color="black"
                            accessibilityLabel="Press to choose"
                            style={this.state.styles.answer}
                            />
                    </View>
                    <View style={[{ width: "90%", 
                    margin: 20, 
                    backgroundColor: "#cc4125",
                     fontSize: 40,
                     shadowColor: "#000",
                     shadowOffset: {
                       width: 0,
                       height: 4,
                      },
                      shadowOpacity: 0.30,
                      shadowRadius: 4.65,
                      elevation: 8, }]}>
                        <Button
                            onPress={this.answerTrue.bind(this)}
                            title={this.state.questions[this.state.question - 1].answerTrue}
                            color="black"
                            accessibilityLabel="Press to choose"
                            style={this.state.styles.answer}
                            />
                    </View>
                    <View style={[{ width: "90%", 
                    margin: 20, 
                    backgroundColor: "#cc4125",
                     fontSize: 40,
                     shadowColor: "#000",
                     shadowOffset: {
                       width: 0,
                       height: 4,
                      },
                      shadowOpacity: 0.30,
                      shadowRadius: 4.65,
                      elevation: 8, }]}>
                        <Button
                            onPress={this.incrementquestion.bind(this)}
                            title={this.state.questions[this.state.question - 1].answerFalseOne}
                            accessibilityLabel="Press to choose"
                            color="black"
                            style={this.state.styles.answer}
                            />
                    </View>
                    <View style={[{ width: "90%", 
                    margin: 20, 
                    backgroundColor: "#cc4125",
                     fontSize: 40,
                     shadowColor: "#000",
                     shadowOffset: {
                       width: 0,
                       height: 4,
                      },
                      shadowOpacity: 0.30,
                      shadowRadius: 4.65,
                      elevation: 8, }]}>
                        <Button
                            onPress={this.incrementquestion.bind(this)}
                            title={this.state.questions[this.state.question - 1].answerFalseTwo}
                            accessibilityLabel="Press to choose"
                            color="black"
                            style={this.state.styles.answer}
                            />
                    </View>
                </>
            );
        }

    }
}

export default question;