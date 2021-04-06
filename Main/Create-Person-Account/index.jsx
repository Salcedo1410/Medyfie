/* React components */
import React, { Fragment } from 'react';
import { View } from 'react-native';

/* Components */
import Text from '../../components/elements/Text';
import Loader from '../../components/dist/Loader';

/* Librarys */
import { Icon } from 'react-native-elements';

/* Styles */
import stylesX from '../../styles';

const CreateAccountPerson = props => {

  return (
    <Fragment>
      <Loader routName={props.route.name} />
      <View>
        <Icon name="hospital" type="font-awesome-5" />
        <Text
        >En construcción...</Text>
      </View>
    </Fragment>
  )
}

export default CreateAccountPerson;