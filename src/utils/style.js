import {StyleSheet} from 'react-native'

export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'

export const css = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: gray
    },
    row: {
        backgroundColor: white,
        borderRadius: 16,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    button: {
        backgroundColor: pink,
        borderRadius: 16,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleList: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    noDataText: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
      },
    
})
