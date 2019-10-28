import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: #F5F5F5;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee
`

export const Input = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
`

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background-color: pink;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.7 : 1)}
`

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
 margin-top: 20px;
`

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px
`

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: lightblue
`

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`

export const Bio = styled.Text.attrs({
    numberOfLines: 2
})`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    text-align: center;
`

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    margin-right: 10px;
    width: 200px;
    border-radius: 4px;
    background: pink;
    justify-content: center;
    align-items: center;
    height: 36px;
`

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase
`

export const DeleteButton = styled(RectButton)`
    width: 35px;
    height: 35px;
    background-color: pink;
    font-size: 14px;
    margin-top: 10px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
` 

export const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`