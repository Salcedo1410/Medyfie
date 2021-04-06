/* React components */
import React, { Fragment, useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';

/* Components */
import LogoApp from '../app/LogoApp';

/* Librarys */
import { DotIndicator } from 'react-native-indicators';

/* Functions */
import { navigate } from '../functions/navigate';
import aleatoryNumber from '../functions/aleatoryNumber';

/* Styles */
import stylesX from '../../styles';

/* JSON */
import colors from '../../styles/colors';

const Loader = props => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    let numberAleatory = aleatoryNumber(3);

      console.log(numberAleatory)

    props.headerHidden();
    
    let isLoading = setTimeout(() => {

      setLoading(true);
      props.headerShown();
      navigate(props.routName);
      
    }, 2000 * numberAleatory);

    return () => clearTimeout(isLoading);

  }, []);

  return (
    <Fragment>
      {!loading ?
        <Fragment>
          <StatusBar backgroundColor={colors.chocolateColorPrimary} />
          <View
            style={
              [
                stylesX.centerContent,
                {
                  flex: 1,
                  backgroundColor: colors.chocolateColorPrimary,
                  paddingBottom: stylesX.width(22.5),
                  zIndex: 99999999,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }
              ]
            }>
            <LogoApp
              width={stylesX.width(36.5)}
              height={stylesX.width(36.5)}
              styles={{ resizeMode: 'cover', marginBottom: 25 }}
            />
            <DotIndicator
              style={{ flex: 0 }}
              color='rgba(255,255,255,0.5)'
              size={10}
              count={6}
              animationDuration={1000} />
          </View>
        </Fragment>
        : null
      }
    </Fragment>
  )
}

export default Loader;

Loader.defaultProps = {
  headerShown: () => null,
  headerHidden: () => null
}