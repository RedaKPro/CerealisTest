import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button } from "react-native";


const input = () => {
    
    const [prenom, onChangePrenom] = React.useState(null);
    const [mail, onChangeMail] = React.useState(null);

    const handleSubmit = () => {
        //console.log(prenom)
        //console.log(mail)
        fetch('https://api.sendinblue.com/v3/contacts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': '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'
            },
            body: JSON.stringify({
                "email": mail,
                "attributes": {
                    "FNAME": "Elly",
                    "LNAME": "Roger",
                    "prenom":prenom,
                },
                "emailBlacklisted": false,
                "smsBlacklisted": false,
                "listIds": [
                    36
                ],
                "updateEnabled": false,
                "smtpBlacklistSender": [
                    "user@example.com"
                ]
            })
});
        
    }
    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangePrenom}
          value={prenom}
          placeholder="Prenom"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={mail}
          placeholder="adresse mail"
        />
        <Button onPress={handleSubmit} title="Submit" />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });




export default input;