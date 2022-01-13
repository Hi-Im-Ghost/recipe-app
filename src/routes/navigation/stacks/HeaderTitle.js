import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    fontSize: 24,
    marginBottom: 0,
    color: 'white',
  },
})

const HeaderTitle = () => (
  <Text color="white" style={styles.logo}>Fajne Przepisy</Text>
)
HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
