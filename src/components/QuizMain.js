import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    state = {
        questions: {
            1: 'Which language has the more native speakers?',
            2: 'What year was the United Nations established?',
            3: 'What car manufacturer had the highest revenue in 2020?',
            4: 'What company was originally called "Cadabra"?',
            5: 'How many ghosts chase Pac-Man at the start of each game?',
            6: 'What character has both Robert Downey Jr. and Benedict Cumberbatch played?',
            7: 'Which planet in the Milky Way is the hottest?',
            8: 'Who discovered that the earth revolves around the sun?',
            9: 'What is a group of pandas known as?',
            10: 'In what country would you find Mount Kilimanjaro?'
        },
        answers: {
            1: {
                1: 'English',
                2: 'Spanish',
                3: 'Japanese'
            },
            2: {
                1: '1945',
                2: '1947',
                3: '1941'
            },
            3: {
                1: 'Maruti',
                2: 'Volkswagen',
                3: 'Pagani'
            },
            4: {
                1: 'Facebook',
                2: 'Amazon',
                3: 'Tata'
            },
            5: {
                1: '3',
                2: '4',
                3: '5'
            },
            6: {
                1: 'Sherlock Holmes',
                2: 'Mickey Mouse',
                3: 'Oggy'
            },
            7: {
                1: 'Mercury',
                2: 'Earth',
                3: 'Venus'
            },
            8: {
                1: 'Nicola Tesla',
                2: 'Nicolas Copernicus',
                3: 'Albert Einstein'
            },
            9: {
                1: 'Happy',
                2: 'Sad',
                3: 'Embarrassment'
            },
            10: {
                1: 'India',
                2: 'Tanzania',
                3: 'Japan'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '2',
            4: '2',
            5: '2',
            6: '1',
            7: '3',
            8: '2',
            9: '3',
            10: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    nextStep = step => {
        this.setState({
            step: step+1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let {questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(questions).length ?
               (<>
                <Question
                        question={questions[step]} /><Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer} /><button
                                className="NextStep"
                                disabled={clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true}
                                onClick={() => this.nextStep(step)}
                            >
                            Next
                        </button>
                        </>) : (
                            <div className="finalPage">
                                <h1>You have completed the quiz!</h1>
                                <p>Your Score is: {score} of {Object.keys(questions).length}</p>
                                <p>Thank You!</p>
                            </div>
                        )
                }       
            </div>
        );
    }
}