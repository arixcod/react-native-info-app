import React ,{useState,Component} from 'react';
import { StyleSheet, Text, View,Image,FlatList,ImageBackground ,TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {StatusBar} from 'react-native';
import Header from './components/header';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const Drawer=createDrawerNavigator();

/*About App Screen*/

function About_App({route,navigation}){
  return(
    <ScrollView>
    <View style={{paddingTop:StatusBar.currentHeight}}>
    
    <Header title='‘मातृत्व पोषण‘ एप्लीकेशन का परिचय'/>
        <Text style={{margin:20 ,flex:1,flexWrap:'wrap',fontSize:20,lineHeight:28,textAlign:'justify'}}>गर्भावस्था न सिर्फ स्त्री परन्तु गर्भ में स्थित शिशु के विकास एवं सम्पूर्ण जीवन की एक महत्वपूर्ण नींव है। गर्भवती माता के द्वारा सेवन किया गया आहार, संतुलित भोजन एवं  आहार आयोजन पर आधारित होना आवश्यक है। एक स्वस्थ शिशु का विकास स्वच्छ वातावरण में तथा सभी खाद्य समूह एवं पोषक तत्वों से युक्त आहार का उचित मात्रा में सेवन द्वारा सम्भव है। 
</Text>
<Image style={{resizeMode:'contain',width:350,height:350}} source={require('./assets/app_images/Picture37.png')}></Image>
<Text style={{margin:20 ,fontSize:20,lineHeight:28,textAlign:'justify'}}>‘मातृृत्व पोषण’ एप्लीकेशन का मुख्य लक्ष्य मातृ कुपोषण एवं उससे सम्बन्धित शारीरिक एवं मानसिक समस्याओं का निदान करना है, जो कि महिलाओं एवं व्यस्क युवतियों में पोषक तत्व, टीकाकरण एवं घरेलू व समाजिक स्वच्छता सम्बन्धी पूर्ण जानकारी एवं जागरुकता द्वारा सम्भव है। 
‘मातृत्व पोषण‘ एप्लीकेशन गर्भवती व धात्री महिलाओं के स्वास्थ्य पर आधारित है। ‘मातृत्व पोषण‘ एप्लीकेशन का निर्माण पी0 एच0 डी0 शोध कार्य के अन्तर्गत ‘मातृ कुपोषण से बचाव हेतु सूचना एवं संचार प्रौधौगिकी उपकरण का विकास एवं जागरुकता का प्रसार‘ के अन्तर्गत किया गया है। ‘मातृत्व पोषण‘ एप्लीकेशन के अन्तर्गत महिलाओं के कुपोषण सम्बन्धी समस्याओं के निदान हेतु प्रमुख एवं सूक्ष्म पोषक तत्व युक्त भोज्य सामग्री का प्रयोग करके रेसिपी एवं उनकी प्रमुखता का उल्लेख किया गया है। ‘मातृत्व पोषण‘ एप्लीकेशन द्वारा समाज एवं महिलाओं में उचित देखभाल व स्वच्छता की जागरुकता का प्रसार सम्भावित है।</Text>
    </View>
    </ScrollView>
  )
}


/* Team Screen*/

function Team_App({route,navigation}){
  return(
    <ScrollView>
    <View style={{paddingTop:StatusBar.currentHeight}}>
  
    <Header title='‘मातृत्व पोषण‘ एप्लीकेशन का परिचय'/>
    <View style={{margin:20,borderRadius:20,backgroundColor:'#c4db95',flex:1}}>
      <Text style={{fontWeight:'bold',fontSize:25,margin:10,borderRadius:60,}}>
        लेखिका :
      </Text>
      <Text style={{lineHeight:25,fontSize:20,marginLeft:20,paddingBottom:15}}>{"तृप्ति वर्मा \n\nजूनियर शोघ छात्रा \nखाद्य पोषण "}</Text>
      </View>
     </View>

     <View style={{paddingTop:StatusBar.currentHeight}}>
  
  <View style={{margin:20,borderRadius:20,backgroundColor:'#c4db95',flex:1}}>
    <Text style={{fontWeight:'bold',fontSize:25,margin:10,borderRadius:60,}}>
      सलाहकार  :
    </Text>
    <Text style={{lineHeight:25,fontSize:20,marginLeft:20,paddingBottom:20}}>{"डाॅ0 अल्का गुप्ता \n\nसह-प्रवक्ता \nखाद्य पोषण एवं \nजन स्वास्थ्य विभाग \nई0 सी0 एच0 एस0, शुआट्स  "}</Text>
    </View>
   </View>

    </ScrollView>
  )
}


const item12={
  id:1,
  text1:'संतुलित पोषण युक्त आहार स्वस्थ अस्तित्व एवं व्यक्तित्व विकास की आधार शिला है। पोषण कितना जरुरी है इसे देश की मौजूदा परिस्थितियों व कुपोषण आधारित आकड़ों की मदद से जाना जा सकता है। शरीर द्वारा प्रत्येक अंग एवं ऊतकों को परस्पर कार्य करने हेतु आवश्यक मात्रा में ऊर्जा(कैलोरी), प्रोटीन, कार्बोहाइड्रेट, वसा, विटामिन, खनिज लवण एवं अन्य पोषक तत्व जब उचित मात्रा में प्राप्त नहीं होते तब शरीर में पोषक तत्वों की कमी हो जाती है। लम्बी अवधि तक शरीर में पोषक तत्वों की कमी कुुषोषण का कारण मानी जाती है। ',
  text2:'गर्भवती व धात्री स्त्रियां एवं जन्म से लेकर पाॅच वर्ष तक के बच्चे भारत देश की सर्वाधिक नाजुक वर्गो में से एक है। जिसके कारण न केवल राष्ट्रीय बल्कि अन्तर्राष्ट्रीय जन स्वास्य समूहों जैसे- विश्व स्वास्थ्य संगठन, यूनीसेफ इत्यादि इनकी विशेष देखभाल एवं स्वास्थ्य सम्बन्धी व्यवस्थाओं को मजबूत करने हेतु निरन्तर कार्यरत है। जैसे कि सर्वज्ञात है कि बच्चों एवं स्त्रियों में पाये जाने वाले अधिकांश रोगो की जड़ कुपोषण है तथा लम्बी अवधि तक संतुलित पोषक तत्वों के आभाव के कारण बच्चों एवं महिलाओं की रोग प्रतिरोधक क्षमता प्रभावित होती है जिससे वे अनेको बिमारियों से ग्रसित होते है। ',
  text3:'गर्भावस्था स्त्री जीवन की एक विशेष अवस्था है जिसके दौरान महिला न सिर्फ अपना बल्कि अपने गर्भ में स्थित शिशु का भी भरपूर्ण ख्याल रखती है। गर्भावस्था का परिणाम एक स्वस्थ माॅ व स्वस्थ शिशु होना चाहिये। अतः गर्भावस्था वह समय है जब गर्भवती जो कुछ खाती है वह सीधे उसके बच्चे के शारीरिक व मानसिक वृद्धि पर प्रभाव डालती है। यदि एक गर्भवती महिला गर्भावस्था के दौरान कुपोषित होती है तो उस शिशु के जीवन के पहले दो वर्ष कुपोषण की दृष्टिकोण से काफी गम्भीर माने जाते है। इस प्रकार जीवन पर्यत्न बच्चे का शारीरिक एवं मानसिक विकास प्रभावित हो जाता है। चूकि भारत एक विकासशील देश है अतः अनेकोनेक प्रयास भारत सरकार द्वारा कराये जा रहे जिसके अन्तर्गत कुपोषण मुक्त भारत एवं मातृ कुपोषण मुख्य है।',
  text4:'',
};

const item123={
id:1,
text1:'मातृ कुपोषण एक गम्भीर स्थिति है जो माता एवं शिशु के शारीरिक वृद्वि, स्वास्थ्य एवं कार्य प्रणाली पर नकारात्मक प्रभाव डालती है। महिलाओं में लम्बें अवधि से कुपोषण व खनिज तत्वों का अभाव खून मे होना भी एक सामान्य कारण है जिससे गर्भ के भीतर बच्चे का विकास असमान्य होने के फलस्वरुप वह अनेको बीमारियों एवं अस्थि कुरुपता का शिकार हो जाते है।  ',
text2:'कुपोषण वह स्थिति है जिसके अन्तर्गत शरीर द्वारा ग्रहण किया गया भोज्य पदार्थ मनुष्य की भूख तो शान्त करता है परन्तु उस आहार द्वारा मिलने वाला पौष्टिक तत्व शरीर की आवश्यक मात्रा के अनुकूल नही होता । ',

};
const item124={
id:1,
title:'',
text1:'शरीर द्वारा प्रत्येक अंग एवं ऊतकों को समुचित रुप से कार्य करने हेतु आवश्यक मात्रा में ऊर्जा, प्रोटीन कार्बोहाइड्रेट, वसा, विटामिन, खनिज तथा अन्य पोषक तत्वों का शरीर में पर्याप्त मात्रा में पाया जाना जरुरी है माता व शिशु दोनेा के स्वास्थ पर अनुकूल प्रभाव पड़ता है। अन्य कारण जिनसे गर्भवती व धात्री महिलाओं में कुपोषण आधारित विकार उत्पन्न होते है, निम्नलिखित है- ',

};

const item125={
id:1,
title:'मातृ कुपोषण के निवारण हेतु आहार सम्बन्धी पोषक तत्वों की जानकारी व अन्य स्वास्थ्य सम्बन्धी देखभाल-',
text1:'गर्भावस्था स्त्री जीवन की एक विशेष अवस्था है गर्भवती स्त्री जो कुछ भी खाती है वह सीधे उसके बच्चे के शारीरिक व मानसिक बृद्वि पर प्रभाव डालती है। अतः परिवारजनों को गर्भवती व धात्री महिलाओं के पोषण पर विशेष ध्यान रखना चाहिये। संतुलित भोजन की थाली, सूक्ष्म पोषक तत्वों से युक्त फल, जड़ एवं हरे पत्तेदार सब्जियाॅ तथा स्वच्छ पानी का नियमित सेवन शरीर में पोषक तत्वों की पूर्ति के लिये अत्यन्त आवश्यक है। ',

};

const Stack=createStackNavigator();

function Details({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item12.text1}</Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture1.png')}></Image>
  <Text style={styles.details}>{item12.text2}</Text>
  <Image style={styles.imagestyle2} source={require('./assets/app_images/Picture2.png')}></Image>
  
  <Text style={styles.details}>{item12.text3}</Text>
  </ScrollView>
</View>
);
}

/*2nd topic details functionf */

function Details2({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item123.text1}</Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
  <Image style={styles.imagestyle2} source={require('./assets/app_images/Picture7.png')}></Image>
  <Image style={styles.imagestyle2} source={require('./assets/app_images/Picture8.png')}></Image>
  <Text style={styles.details}>{item123.text2}</Text>
  
  
  </ScrollView>
</View>
);
}


function Details3({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>महिलाओं मे मातृ कुपोषण की स्थिति निम्नलिखित है- </Text>
 
  <Text style={{fontWeight:'bold' ,fontSize:25,paddingBottom:5,paddingTop:10}}>1. शरीर का वजन अपेक्षित से कम होना-  </Text>
  <Text style={styles.details}>जैसा कि नाम द्वारा ही ज्ञात हो रहा कि उम्र व लम्बाई के अनुसार महिलाओं की वजन मे कमी जो कि शरीर मंे अन्य पोषण तत्वों का कमी का प्रमुख परिणाम एवं कारण है।  </Text>
 
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture9.png')}></Image>
  <Text style={{fontWeight:'bold' ,fontSize:25,paddingBottom:5,paddingTop:10}}>2. सूक्ष्म पोषक तत्वों की कमी- </Text>
  <Text style={styles.details}>सूक्ष्म पोषक तत्वों की कमी शरीर में विटामिन ए, बी, सी तथा डी जैसे आवश्यक विटामिन के साथ-साथ फोलेट कैल्शियम, आयोडीन व जिंक की कमी को दर्शाता है। इनकी कमी से अपर्याप्त विकास, एनीमिया, मस्तिष्क विकार, थायराइड, रिकेट्स व रोग प्रतिरोधक क्षमता मे कमी इत्यादि शारीरिक समस्यायें उत्पन्न होती है। </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture10.png')}></Image>
  
  <Text style={{fontWeight:'bold' ,fontSize:25,paddingBottom:5,paddingTop:10}}>3.शरीर का वजन अपेक्षित वजन से अधिक होना-  </Text>
  <Text style={styles.details}>गर्भावस्था से पहले व गर्भावस्था के दौरान थायराइड हार्मोन्स का असंतुलन, भूख अधिक लगना, पर्याप्त मात्रा में पोषक तत्वों का अवशोषण न होने के कारण या एनीमिया ग्रस्त शरीर भी प्रमुख कारण है जिसके द्वारा शरीर का वजन अपेक्षित वजन से अधिक हो जाता है यह स्थिति भी कुषोषण को दर्शाती है।  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture11.png')}></Image>
  
  </ScrollView>
</View>
);
}

function Details4({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item124.text1}</Text>
  
  <Text style={styles.boldtext}>{1.+'\u2022' + "  गरीबी एवं आर्थिक तंगी "}</Text>  
  <Text style={styles.boldtext}>{2.+'\u2022' + "  दूषित भोज्य पदार्थ का सेवन जैसे - मैदा, अधिक वसा, कृत्रिम खाद्य रंगो की बनी खाद्य पदार्थो का सेवन  "}</Text> 
  <Text style={styles.boldtext}>{3.+'\u2022' + "  नियमित समय पर सही प्रकार से भोजन का सेवन न करना  "}</Text> 
  <Text style={styles.boldtext}>{4.+'\u2022' + "  पाचन एवं पोषण सम्बन्धित रोग जैसे- अल्सर, टाइफाइड, पीलिया, विटामिन सी, ए तथा डी की कमी होना, एक के बाद एक लगातार गर्भधारण होना  "}</Text> 
  <Text style={styles.boldtext}>{5.+'\u2022' + " अशिक्षा एवं पोषक तत्व सन्दर्भित जानकारी का आभाव  "}</Text> 
  <Text style={styles.boldtext}>{6.+'\u2022' + " 	लिंग भेदभाव    "}</Text> 
  <Text style={styles.boldtext}>{7.+'\u2022' + " शारीरिक एवं सामाजिक स्वच्छता का आभाव होना जिसके फलस्वरुप अनेक प्रकार की संक्रामक बीमारी की चपेट मे आने के कारण स्वास्थ्य कमजोर होना। "}</Text> 
  
  </ScrollView>
</View>
);
}

function Details5({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>{item125.text1}</Text>
  <Image style={{borderRadius:4,height:300,width:350,}} source={require('./assets/app_images/Picture16.jpg')}></Image>
 

</ScrollView>
</View>
);
}

function Details6({navigation,route}){


return(
<View style={styles.details}>
  <ScrollView style={styles.scrollstyle}>
  <Text style={{fontWeight:'bold',fontSize:20}}>1.प्रोटीन-</Text>
  <Text style={styles.details}>प्रोटीन हमारे शरीर की संरचना के लिये महत्वपूर्ण है गर्भवती स्त्रियों मे प्रोटीन की आवश्यकता सामान्य अवस्था से अधिक होती है। </Text>
  <Text style={styles.details}> {'\u2022 गर्भावस्था के दौरान भ्रूण के विकास एवं शारीरिक अंगो के निर्माण हेतु प्रोटीन का सेवन आवश्यक है। '}</Text>
  <Text style={styles.details}>{'\u2022 शारीरिक अंगो का निर्माणत्र, हार्माेन्स संतुलन एवं उनके नियन्त्रण के लिये प्रोटीन आवश्यक होते है।'} </Text>
  <Text style={styles.details}>{'\u2022 आहार के माध्यम से प्रोटीन का सेवन आवश्यक है क्योकि इसे शरीर में वसा या कार्बोहाइड्रेड की भांति सचित नही किया जा सकता।'} </Text>
  <Text style={styles.details}>{'\u2022 दूध स्त्रावण में सहायक तत्व'}</Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>प्रोटीन की र्निधारित मात्रा-</Text>
  <Image  style={ { width:300}} source={require('./assets/app_images/Picture27.png')}></Image>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
 
  <Text style={{fontWeight:'bold',fontSize:20}}>प्रोटीन की गर्भवती महिलाओं में कमी होने से समस्या एवं लक्षण -</Text>
  <Text style={styles.details}> {'\u2022 मांसपेशियों में कमजोरी  '}</Text>
  <Text style={styles.details}>{'\u2022 मां एवं शिशु के विकास में अवरोध '} </Text>
  <Text style={styles.details}>{'\u2022 शरीर में सूजन (एल्ब्यूमिन की कमी के कारण) '} </Text>
  <Text style={styles.details}>{'\u2022 कम वजन वाले शिशु का जन्म'}</Text>
  <Text style={styles.details}>{'\u2022 रोग प्रतिरोधक क्षमता कम, व नवजात की हृदय वृद्धि पर प्रभाव '}</Text>


  <Text style={{fontWeight:'bold',fontSize:20}}>प्रोटीन युक्त खाद्य पदार्थ- </Text>
  <Text style={styles.details}> {'\u2022 फलियाॅ       '}</Text>
  <Text style={styles.details}>{'\u2022 कम वसा वाले डेयरी उत्पाद '} </Text>
  <Text style={styles.details}>{'\u2022 सोया एवं उसके उप्पाद (टोुफू, टेम्फ) '} </Text>
  <Text style={styles.details}>{'\u2022 मंगफली से बना मक्खन '}</Text>
  <Text style={styles.details}>{'\u2022 नट्स (मेवे)'}</Text>
  <Text style={styles.details}>{'\u2022 अंडा'}</Text>
  <Text style={styles.details}>{'\u2022 मछली व चिकन'}</Text>


  <Text style={{fontWeight:'bold',fontSize:20}}>2. विटामिन डी- </Text>
  <Text style={styles.details}>विटामिन-डी जिसका रासायनिक नाम कोलकैल्सीफेरोल है यह सूर्य के प्रकाश की उपस्थिति में हाइड्राक्सी कोलकैल्सीफेराल में परिवर्तित होता है जो कि शरीर में हार्मोन की भांति तथा कैल्शियम एवं फास्फोरस के संचयन में सहायक होता है। विटामिन -डी गर्भवती महिलाओं में कैल्शियम के उपापचय व शिशु की हड्डी के विकास में मदद करते है। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन- डी की निर्धारित मात्रा-  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
  <Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती व धात्री महिलाओं में विटामिन-डी की अभाव से उत्पन्न समस्यायें एवं लक्षण-</Text>
  <Text style={styles.details}> {'\u2022 रोग प्रतिरोधक क्षमता का कम होना     '}</Text>
  <Text style={styles.details}>{'\u2022 शिशु का कंकाल तंत्र व मानसिक स्तर कमजोर होना।  '} </Text>
  <Text style={styles.details}>{'\u2022 बाल का झड़ना एवं पतले नाखून '} </Text>
  <Text style={styles.details}>{'\u2022 मूत्र विसर्जन अधिक होना  '}</Text>
  <Text style={styles.details}>{'\u2022 रिकेट्स नामक बिमारियों का महिलाओं में पाया जाना '}</Text>
  <Text style={styles.details}>{'\u2022 शिशुओं में आॅस्टियोंमेंलेशिया का पाया जाना '}</Text>
  <Text style={styles.details}>{'\u2022 पेट दर्द एंव डायरिया '}</Text>



  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन-डी युक्त खाद्य पदार्थ- </Text>
  <Text style={styles.details}> {'\u2022 दूध एवं दुग्ध उत्पाद     '}</Text>
  <Text style={styles.details}>{'\u2022 अंडा, मछली, मशरुम   '} </Text>
  <Text style={styles.details}>{'\u2022 बादाम, खजूर एवं तिल का निरन्तर सेवन '} </Text>
  <Text style={styles.details}>{'\u2022 हरी पत्तेदार सब्जियाॅ जैसे-पालक, केल, ब्राॅकली,मेथी, बथुआ इत्यादि।'}</Text>
  <Text style={styles.details}>{'\u2022 मोटे अनाज-रागी, बाजरा, ज्वार इत्यादि। '}</Text>
  <Text style={styles.details}>{'\u2022 फल जैसे- संतरा अंजीर इत्यादि।   '}</Text>
  <Text style={styles.details}>{'\u2022 सूरज की किरणे ं '}</Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>3. विटामिन-ए </Text>
  <Text style={styles.details}>गर्भवती  एवं धात्री महिलाओं की संतुलित मात्रा दूध के उत्पादन में एवं  सामान्य दृष्टि के लिये आवश्यक है। विटामिन ‘ए‘ का अभिशोेेेेेेेेेेेेेेेेेषण नवजात शिशु में काफी धीमा हो जाता है अतः गर्भवती को विटामिन ए युक्त प्राणिज खाद्य पदार्थो का सेवन अवश्य करना चाहिये। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन ‘ए‘ की निर्धारित मात्रा-  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन ‘ए‘ की गर्भवती व धात्री महिलाओं में अभाव के कारण समस्याएं एवं लक्षण- </Text>
  <Text style={styles.details}> {'\u2022 रोग प्रतिरोधक क्षमता का कम होना     '}</Text>
  <Text style={styles.details}>{'\u2022 बाइल एसिड के निर्माण में कमी के कारण सिरोसिस, हिपेटाइटिस का होना  '} </Text>
  <Text style={styles.details}>{'\u2022 प्रोटीन का अभाव  '} </Text>
  <Text style={styles.details}>{'\u2022 नेत्र का अंधापन, अतिसार '}</Text>
  <Text style={styles.details}>{'\u2022चर्मरोग  '}</Text>
  
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन ‘ए‘ युक्त खाद्य पदार्थ-   </Text>
  <Text style={styles.details}> {'\u2022 यकृत का तेल, मछली      '}</Text>
  <Text style={styles.details}>{'\u2022 मक्खन, घी, दूध एवं दुग्ध उत्पाद   '} </Text>
  <Text style={styles.details}>{'\u2022 पालक, हरी धनिया, पुदीना मेथी चैराई साग आदि  '} </Text>
  <Text style={styles.details}>{'\u2022 गाजर, आम, पपीता   '}</Text>

  
  <Text style={{fontWeight:'bold',fontSize:20}}>4. फोलिक एसिड- </Text>
  <Text style={styles.details}>गर्भवास्था एवं उससे छः महीने पहले फोलिक एसिड की कमी बच्चे के मस्तिष्क तथा रीढ़-हड््डी के पूर्ण विकास को प्रभावित करती है अतः गर्भवती को हरे-पत्तेदार सब्जियाॅ, खट्टे फल जैसे- नींबू अथवा मौसमी एवं सभी प्रकार की दाल मेवे जैसे- काजू, पिस्ता, बादाम इत्यादि का सेवन अवश्य करना चाहिये। </Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>फोलिक एसिड की निर्धारित मात्रा-  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>

<Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती एवं धात्री महिलाओं में फोलिक एसिड की कमी के कारण उत्पन्न समस्यायें एवं लक्षण-  </Text>

<Text style={styles.details}> {'\u2022 खून की कमी एवं रक्ताल्पता     '}</Text>
  <Text style={styles.details}>{'\u2022 बच्चों में कटे होंठ या कटे तालू का होना   '} </Text>
  <Text style={styles.details}>{'\u2022 ‘स्पाइना बाइफिडा’ तंत्रिका तंत्र विकार का पाया जाना   '} </Text>
  <Text style={styles.details}>{'\u2022 डी0एन0ए0 के अत्पादन एवं कार्य क्षमता में बाधा उत्पन्न करना   '}</Text>
  <Text style={styles.details}>{'\u2022 थकान, सिरदर्द, ऊर्जा की कमी का महसूस होना एवं भूख न लगना।    '}</Text>
  
  
  <Text style={{fontWeight:'bold',fontSize:20}}>फोलिक एसिड युक्त खाद्य पदार्थ- </Text>

  <Text style={styles.details}> {'\u2022 पालक      '}</Text>
  <Text style={styles.details}>{'\u2022 लोबिया   '} </Text>
  <Text style={styles.details}>{'\u2022 एवोकाडो  '} </Text>
  <Text style={styles.details}>{'\u2022 ब्रोकली   '}</Text>
  <Text style={styles.details}>{'\u2022 थराजमा     '}</Text>

  <Text style={styles.details}> {'\u2022 हरे मटर       '}</Text>
  <Text style={styles.details}>{'\u2022 संतरे का रस, मौसम्मी एवं अनार    '} </Text>
  <Text style={styles.details}>{'\u2022 खजूर, अंजीर, किशमिश भिगोयी हुयी गुड़ को भिगोकर अगले दिन उसका पानी पीना।   '} </Text>
  

  <Text style={{fontWeight:'bold',fontSize:20}}>5. विटामिन बी-12- </Text>
  <Text style={styles.details}>विटामिन बी-12 का प्रमुख घटक कोबालमिन है। संश्लेषित तौर पर इसे साइनोकोबालमिन के नाम से जाना जाता है। विटामिन बी-12 का अणु आकार में बड़ा होता है अतः आन्तरिक कारको द्वारा प्रतिदिन सिर्फ 2.5 से 3.0 माइक्रोग्राम विटामिन बी-12 का अभिशोषण होता है गर्भवती एवं धात्री महिलाओं में विटामिन बी-12 के अभाव के कारण मेगेलोबलास्टिक एनीमिया हो जाता है। </Text>
  <Text style={styles.details}> {'\n\u2022 तंत्रिका तंत्र के समन्वयन में सहायक       '}</Text>
  <Text style={styles.details}>{'\n\u2022 डी0एन0ए0 तन्तु के निर्माण में सहायक    '} </Text>
  <Text style={styles.details}>{'\n\u2022 रक्त में लाल रुधिर कणिकाओं के निर्माण में सहायक  '} </Text>


  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन बी-12 की निर्धारित मात्रा- </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
  <Text style={{fontWeight:'bold',fontSize:20}}>गर्भवती व धात्री महिलाओं में विटामिन बी-12 के अभाव व कमी से उत्पन्न लक्षण एवं शारीरिक समस्यायें- </Text>
  <Text style={styles.details}> {'\u2022 मेगोब्लस्टिक एनीमिया  '}</Text>
  <Text style={styles.details}>{'\u2022 कमजोेेेेेेेेेेेेेेेेेेरी एवं जी मिचलाना  '} </Text>
  <Text style={styles.details}>{'\u2022 शिशु के शारीरिक अंगो में विकार   '} </Text>
  <Text style={styles.details}>{'\u2022 तंत्रिका तंत्र प्रभावित होना    '}</Text>
  <Text style={{fontWeight:'bold',fontSize:20}}>विटामिन बी-12 युक्त खाद्य पदार्थ-  </Text>
  <Text style={styles.details}> {'\u2022 मांस, मछली एवं अण्डे  '}</Text>
  <Text style={styles.details}>{'\u2022 दूध एवं दही  '} </Text>
  <Text style={styles.details}>{'\u2022 पनीर एवं मानवनिर्मित चीज  '} </Text>
  <Text style={styles.details}>{'\u2022 योगहर्ट   '}</Text>
  <Text style={styles.details}>{'\u2022 समुद्री भोज्य उत्पाद जैसे कि मछली, झंींगा      '}</Text>

  <Text style={styles.details}>{'\u2022 बादाम    '}</Text>
  <Text style={styles.details}>{'\u2022 स्किमड दूध पाउडर    '}</Text>

  <Text style={{fontWeight:'bold',fontSize:20}}>6. ओमेगा-3 वसीय अम्ल-</Text>
  <Text style={styles.details}>ओमेगा-3 वसीय अम्ल बच्चे के मस्तिष्क के विकास तथा गर्भवती को सुचारु रुप से मांसपेशियों के क्रियान्वयन हेतु आवश्यक है। गर्भावस्था के दौरान पहले 1-3 महीने तथा 6-9 महीने शिशु के मस्तिष्क विकास तथा अन्य क्रिया कलापों हेतु गर्भवती को अपने आहार में मछली सोयाबीन, अलसी के बीज को भूनकर रोटी पर छिड़ककर तथा अखरोट का सेवन करना होगा। </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
 




  <Text style={{fontWeight:'bold',fontSize:20}}>7. जिंक- </Text>
  <Text style={styles.details}>शिशु की रोग प्रतिरोधक क्षमता तथा डी.एन.ए. विश्लेषण हेतु जिंक की पर्याप्त मात्रा होना आवश्यक है यदि जिंक की कमी गर्भवती स्त्री के शरीर में है तो गर्भ में शिशु के विकास में अवरोध अत्पन्न होता है। जिंक को प्राकृतिक रुप से दालो ,अण्डों, सूखे मेवे व बीज से प्राप्त कर सकते है।  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
  <Text style={{fontWeight:'bold',fontSize:20}}>8.कैल्शियम-</Text>
  <Text style={styles.details}>कैल्शियम की कमी जो कि प्रायः विटामिन डी की कमी या फास्फोरस के सामान्य क्रियान्वयन न होने के कारण सामान्य जनसंख्या व गर्भावती में पायी जाती है। जिसके कारण शिशु की हड्डियाॅ एवं दांतो का विकास प्रभावित तथा गर्भवती हाइपरटेनश्न एवं पूर्व डिलवरी का शिकार हो सकती है। मुख्य रुप से ये  रागी, बाजरा, करी पत्ता, दुग्ध व दुग्ध उत्पाद, सूखे मेवे, मशरुम, फलियाॅ इत्यादि में पाये जाते है। गर्भवती एवं धात्री महिलायें प्रतिदिन शिशु के साथ 35-45 मिनट घूप में अवश्य बैठे। </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>


  <Text style={{fontWeight:'bold',fontSize:20}}>9.मैग्नीशियम--</Text>
  <Text style={styles.details}>मैग्नीशियम की पूर्ति गर्भवती को निम्न समस्याओं जैसे- बदन दर्द, उल्टी, मिचली, भूख न लगना, थकान इत्यादि से निजात दिलाती है। प्राकृतिक रुप से हरी पत्तेदार सब्जियाॅ, सोयाबीन सूखे मेवे, मशरुम, दुग्ध उत्पाद, मूंगफली से बना मक्खन, मैग्नीशियम की पूर्ति में सहायक है।  </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
 
 

  <Text style={{fontWeight:'bold',fontSize:20}}>10.आयोडीन-</Text>
  <Text style={styles.details}>शिशु के मस्तिष्क विकास तथा पाचन-प्रणाली के सामान्य क्रियान्वयन के लिये आयोडीन आवश्यक है साथ ही साथ गर्भवती में थायराइड हार्मोन्स के संतुलन को बनाये रखने के लिये भी जरुरी है। शरीर में थायराइड हार्मोन्स की कमी के कारण बच्चा मरा हुआ, गर्भपात या समय से पूर्व डिलवरी का खतरा होता है। आयोडीन की पूर्ति हेतु नमक की निर्धारित मात्रा के साथ बेरी जैसे- आंवला, दुग्ध व दुग्ध उत्पाद तथा समुद्री भोजन जैसे- मछली, झंींगा, सूखे मेवे व बीज का सेवन कर सकते है।</Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
 



  <Text style={{fontWeight:'bold',fontSize:20}}>11.आयरन- -</Text>
  <Text style={styles.details}>लौह तत्व जो कि गर्भवती के लिये सर्वाधिक महत्वपूर्ण पोषक तत्व है जिसके कमी से रक्ताल्पता, थकान, उल्टी मिचली, वजन कम होना व बुखार इत्यादि समस्यायें गर्भावस्था के दौरान बनी रहती है अतः इसकी पूर्ति हेतु हरी-पत्तेदार सब्जियाॅ, दाले, फलियाॅ,  गुड-चना, सत्तू, खट्टेफल, अनार-मौसमी इत्यादि का नियमित सेवन करे </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture6.png')}></Image>
 


        </ScrollView>
</View>
);
}

function Details7({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>उपरोक्त सभी पोषक तत्वों की पूर्ति के साथ प्रोटीन तथा कैलोरी शारीरिक एवं मानसिक विकास हेतु निर्धारित मात्रा में लेना चाहिये।</Text>
 
  <Text style={styles.boldtext}>{'\u2022' + " फल तथा सब्जियाॅ- रोग प्रतिरोधक क्षमता व पोषक तत्वों की पूर्ति  "}</Text>  
  <Text style={styles.boldtext}>{'\u2022' + " अनाज व मोटे अनाज - कार्बोहाइड्रेड युक्त आहार   "}</Text> 
  <Text style={styles.boldtext}>{'\u2022' + "  दाले-फलिया, मांसाहारी भोजन, समुद्री भोज्य पदार्थ-प्रोटीन युक्त आहार "}</Text> 
  <Text style={styles.boldtext}>{'\u2022' + "  दुग्ध एवं दुग्ध अत्पाद- विटामिन्स तथा सूक्ष्म पोषक तत्वों युक्त "}</Text> 
  <Text style={styles.boldtext}>{'\u2022' + "  वसा एवं शर्करा युक्त उत्पाद एंव ड्रिक्स- ऊर्जायुक्त आहार "}</Text> 

 
 
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture26.png')}></Image>
  
  
  
  </ScrollView>
</View>
);
}

class Details8 extends Component {
constructor(props) {
super(props);
this.state = {
  HeadTable: ['   समय', '  आहार नियोजन'],
  DataTable: [
    ['सुबह उठने के बाद', 'गाय का दूध, बादाम दूध, मेवे'],
    ['सुबह का नाश्ता', 'रवा उपमा, मिक्स सब्जी पोहा, मिक्स सब्जी पराठा, दूध रोटी, उबला हुआ अण्डा'],
    ['दोपहर के भोजन से पूर्व के समय', 'टमाटर का जूस, फल का जूस, चिकन सूप, पालक सूप'],
    ['दोपहर का भोजन', ' \u2022 रोटी, पराठा \n\u2022 लेमन चावल, चावल,वेजिटेबल खिचड़ी \n\u2022 चिकन करी, दाल, हरी पत्तेदार सब्जियाॅ, मिक्स वेजिटेबल सब्जी \n\u2022 रायता, वेजिटेबल सलाद, चटनी'],
    ['शाम का नाश्ता', 'मिक्स सब्जी इडली, दलिया, पनीर सैडविंच,नमकीन सेवई, लौकी या गाज़र हलवा'],
    ['रात का खाना', '\u2022 पलक पनीर, रोटी तथा खीर \n\u2022 वेजिटेबल बिरयानी संग रायता \n\u2022 चिकन, पराठा तथा सलाद \n\u2022 दाल, चावल, हरी पत्तेदार सब्जी, रायता'],
    ['रात के खाने के बाद', 'गाय का दूध, बटर मिल्क'],
  ]
}
}

render() {
const state = this.state;
return (
  <View style={styles.containe_table}>
    <ScrollView>
    <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
      <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
      <Rows data={state.DataTable} textStyle={styles.TableText}/>
    </Table>
    </ScrollView>
  </View>
)
}
}

class Details9 extends Component {
constructor(props) {
super(props);
this.state = {
  HeadTable: ['   समय', '  आहार नियोजन'],
  DataTable: [
    ['सुबह उठने के बाद', 'गाय का दूध, बादाम दूध,'],
    ['सुबह का नाश्ता', 'रवा उपमा, मिक्स सब्जी पोहा, मिक्स सब्जी पराठा, दूध रोटी, उबला हुआ अण्डा'],
    ['दोपहर के भोजन से पूर्व के समय', ' फल का जूस, चिकन सूप, मेवे का लडडू '],
    ['दोपहर का भोजन', ' \u2022 रोटी, पराठा \n\u2022 लेमन चावल, चावल,वेजिटेबल खिचड़ी \n\u2022 चिकन करी, दाल, हरी पत्तेदार सब्जियाॅ, मिक्स वेजिटेबल सब्जी \n\u2022 रायता, वेजिटेबल सलाद, चटनी'],
    ['शाम का नाश्ता', 'मिक्स सब्जी इडली, दलिया, पनीर सैडविंच,नमकीन सेवई, लौकी या गाज़र हलवा सतावर का दूध'],
    ['रात का खाना', '\u2022 पलक पनीर, रोटी तथा खीर \n\u2022 वेजिटेबल बिरयानी संग रायता \n\u2022 चिकन, पराठा तथा सलाद \n\u2022 दाल, चावल, हरी पत्तेदार सब्जी, रायता'],
    ['रात के खाने के बाद', 'गाय का दूध, बटर मिल्क'],
  ]
}
}

render() {
const state = this.state;
return (
  <View style={styles.containe_table}>
    <ScrollView>
    <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
      <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
      <Rows data={state.DataTable} textStyle={styles.TableText}/>
    </Table>
    </ScrollView>
  </View>
)
}
}
function Details10({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>संतुलित भोजन के साथ-साथ भोजन एवं पानी का स्वच्छ होना आवश्यक है अतः शारीरिक स्वच्छता जैसे हाथ पैर के नाखून कटे होना, नियमित व्यायाम, स्नान तथा समय-समय पर हाथ धोना एवं पेट की कीड़ों को मारने हेतु दवाई का सेवन जरुरी है। घरेलू स्वच्छता हेतु कूड़े-करकट को कूड़ेघर मे डालना अथवा मिट्टी के भीतर दबा देना चाहिये। किसी स्थान एवं नाली में पानी एकत्र न होने दे, मच्छर एवं मक्खियों को रसोई एवं घर में न आने हेतु जालीदार दरवाजे लगवायें। शौच हेतु शौचालय बनवायें एवं पानी उबाल कर पिये। प्रतिदिन पूरे घर की सफाई करें। </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture24.png')}></Image>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture25.png')}></Image>
  
  
  
  </ScrollView>
</View>
);
}

function Details11({navigation}){


return(
<View style={styles.details}>
  
  <ScrollView style={styles.scrollstyle}>
  <Text style={styles.details}>30 दिसम्बर 2019 में उत्पन्न महामारी कोरोना जो कि चाइना स्थित शहर वुहान से संक्रमण द्वारा फैलकर भयावह सर्वव्यापी महामारी का रुप ग्रहण कर लेती है। यह संक्रामक बीमारी हमारे सामाजिक, पारिवारिक व आर्थिक जीवन को पूरी तरह बदल कर हमे यह शिक्षा देती है कि संक्रमण से फैलने वाली बीमारी जैसे- कोरोना, हैजा, मलेरिया, तपेदिक, फलू आदि हमारे शरीर के भीतर कितने गम्भीर परिवर्तन कर सकती है। </Text>
  <Image style={styles.imagestyle1} source={require('./assets/app_images/Picture17.png')}></Image>
  
  <Text style={styles.details}>शारीरिक एवं घरेलू स्वच्छता के साथ मास्क, साबुन व सैनटाइजर का उपयोग एवं दो गज की दूरी हमारे जीवन का अहम हिस्सा है जिसको अपनाकर हम अपने एवं अपने परिवार को स्वस्थ एवं आर्थिक रुप से सशक्त बना सकते है। अतः विशेष बिन्दु जिनको ध्यान में रखकर हम कोरोना एवं अन्य बीमारियों से स्वयं की रक्षा कर सकते है। निम्न है- </Text>
  
  <Text style={styles.details}>1.साबुन एवं हैडवाश से हाथ धुले एवं सैनेटाइजर का प्रयोग करे। </Text>
  <Image style={{height:150,width:150}} source={require('./assets/app_images/Picture19.png')}></Image>
  <Text style={styles.details}>2.घर से बाहर निकलते समय चेहरे पर मास्क एवं घरेलू दुपट्टे का प्रयोग करें। भीड़  वाले स्थल में दो गज की दूरी रखे। </Text>
  <Image style={{height:150,width:150}} source={require('./assets/app_images/Picture20.png')}></Image>
 
  <Text style={styles.details}>3.फल-सब्जियाॅ एवं अन्य थेलियों वाली सामाग्री को नमक वाले गुनगुने पानी में 30 मिनट तक डाल दे तप्पश्चात सूती कपड़े से पोछ कर उपयोग में लाये। </Text>
  <Text style={styles.details}>4.नियमित व्यायाम व आयुष मंत्रालय द्वारा निर्देशित काढ़े का सेवन करें। स्वास्थ्य वर्धक भोजन का सेवन करें। </Text>
  <Text style={styles.details}>5.गर्भवती व धात्री महिलाये खुले में शौच में न जाये। समय-समय पर अपने तथा परिवार के लोगो का नाखून काटे तथा बच्चे एवं स्वयं का तापमान चेक करती रहे।</Text>
  
  <Image style={{height:150,width:150}} source={require('./assets/app_images/Picture23.png')}></Image>
 </ScrollView>
</View>
);
}




function landingPage({navigation}){

  const [item, setitem]=useState([
    {id:1,text:'प्रस्तावना',fn:'Details'},
    {id:2,text:'मातृ कुपोषण क्या है ?',fn:'Details2'},
    {id:3,text:'मातृ कुपोषण के प्रकार',fn:'Details3'},
    {id:4,text:'मातृ कुपोषण के कारण',fn:'Details4'},
    {id:5,text:'मातृ कुपोषण के निवारण हेतु पोषक तत्व',fn:'Details5'},
    {id:6,text:'गर्भवती व धात्री महिलाओं के लिये आवश्यक पोषक तत्व ',fn:'Details6'},
    {id:7,text:'गर्भवती एवं धात्री महिला हेतु संतुलित आहार',fn:'Details7'},
    {id:8,text:'गर्भवती महिला हेतु संतुलित आहार नियोजन',fn:'Details8'},
    {id:9,text:'धात्री महिला हेतु संतुलित आहार नियोजन',fn:'Details9'},
    {id:10,text:'शारीरिक एवं घरेलू स्वच्छता',fn:'Details10'},
    {id:11,text:'कोरोना के सन्दर्भ में विशेष जानकारी',fn:'Details11'},
    
  ]);
  

  return(
    <ImageBackground source={require('./assets/app-image1.jpg')} style={styles.imagestyle}>
    <View style={styles.container}>
      <Header title={'मातृत्व पोषण'}/>
      <FlatList data={item} renderItem={({item}) =>

  <TouchableOpacity style={styles.listitem} onPress={()=>navigation.navigate(item.fn,{
  text:item.text,
  })}>
     <View style={styles.listitemview}>
         <Text style={styles.listitemtext}>{item.text}</Text>
     </View>

   </TouchableOpacity>
}/> 
</View>
    </ImageBackground>
  )
}


/*function which will return the title Component and its styled */

function LogoTitle() {

  return (
    <View style={{flex:1,flexWrap:'wrap'}}>
      <Text>route.params.text</Text>
    </View>
  );
}

function Root(){
  return(
<Drawer.Navigator initialRouteName="landingPage">
<Drawer.Screen  name='Home' component={landingPage}></Drawer.Screen>
<Drawer.Screen  options={{title:'मातृत्व पोषण एप्लीकेशन का परिचय',HeadStyle:{backgroundColor:'orange'},}} name='About' component={About_App}/>
<Drawer.Screen name='Team' component={Team_App}/>
</Drawer.Navigator>
);
}


export default function App() {
  
  return (

    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen options={{headerShown:false}} name='Root' component={Root}></Stack.Screen>
    <Stack.Screen options={{headerShown:false}} name='Home' component={landingPage}></Stack.Screen>  

    
    <Stack.Screen name='Details' component={Details}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />
    <Stack.Screen name='Details2' component={Details2}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details3' component={Details3}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />

<Stack.Screen name='Details4' component={Details4}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details5' component={Details5}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details6' component={Details6}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    
    })} />



<Stack.Screen name='Details7' component={Details7}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    
      
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details8' component={Details8}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />



<Stack.Screen name='Details9' component={Details9}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details10' component={Details10}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />


<Stack.Screen name='Details11' component={Details11}  options={({ route }) => ({ title: route.params.text,
    
    headerStyle: {
      backgroundColor: '#362327',
      height:100,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      paddingTop:40,
      paddingBottom:40,
      fontWeight: 'bold',
    },
    
    })} />
    </Stack.Navigator>
   
 
  </NavigationContainer>      
  );
}





const styles = StyleSheet.create({
      container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        flexWrap:'wrap'
      },
      imagestyle:{
        flex:1,
        resizeMode: 'cover',
      
      },
      listitem:{
        backgroundColor:'#362327',
        margin:15,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:12,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:10,
        borderColor:'green'
         },
     listitemview:{
     
     },
     
     listitemtext:{
         fontSize:25,
         color:'white'
   
     },
     details:{
        borderRadius:20,
        margin:10,
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        fontSize:25,
        textAlign:'justify'
     },
     imagestyle1:{
    height:300,
    width:300,
     }
   ,
     imagestyle2:{
      height:300,
      width:350,
       },
       boldtext:{
         fontSize:25,
         paddingLeft:30,
         paddingBottom:10,
         paddingRight:10,
         fontWeight:'bold'
       },
       containe_table:{
    
        padding:15,
         fontSize:18,
       },
       TableText:{
         flexWrap:'wrap',
         fontSize:18,
         textAlign:'center',
       }
     
});
