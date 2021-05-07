import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text,View,TouchableOpacity,Button, Touchable} from 'react-native';
import SleepSvg from './svg/svg1';
import DocterSvg from './svg/svg2';
import StandSvg from './svg/svg3';
import HealthSvg from './svg/svg4'
import styles from './styles'


const Skip =({...props}) => (
  <TouchableOpacity {...props}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
  );

  const Next =({...props}) => (
    <TouchableOpacity {...props}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
    );

    const Done =({...props}) => (
      <TouchableOpacity {...props}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    
      );

    
  
export default function OnboardingScreen({ navigation: { navigate } })
{
    return(
        <Onboarding
        SkipButtonComponent = {Skip}
        NextButtonComponent = {Next}
        DoneButtonComponent = {Done}
       
        onSkip ={() => navigate('Tabscreen')}
        // onDone ={() => navigation.navigate('TabScreen')}
        
        onDone={() =>
          navigate('Tabscreen')
        }
        

        pages={[
 
    {
        backgroundColor: '#34c85a',
        image: <SleepSvg/>,
        title: 'Analyse your, Sleep is the Best Meditation',   
        subtitle:'',    
      },
    
      {
        backgroundColor: '#34c85a',
        image: <DocterSvg/>,
        title: 'Getting Enough sleep can be just as important as working out ',
        subtitle:'',  
      },
      {
        backgroundColor: '#34c85a',
        image: <HealthSvg/>,
        title: 'Sleep is one of the three pillars of a healthy lifestyle',
        subtitle:'', 
      },
      {
        backgroundColor: '#34c85a',
        image: <StandSvg/>,
        title: 'Our App will help you Relax,Sleep Better and Wake Up',
        subtitle:'', 
      },
          
        ]}
        />
        

    )
}