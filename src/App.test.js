import {render, screen, fireEvent} from '@testing-library/react'  
import userEvent from '@testing-library/user-event'
import React from 'react'

import App from './App';
import SearchInput from './SearchInput';

describe("App Tests", () =>{
  render(<App/>);
  const title = screen.getByText("Emoji Search")
  const emojis = ["100","1234","Grinning","Grimacing","Grin","Joy","Smiley","Smile","Sweat Smile","Laughing","Innocent","Wink","Blush","Slight Smile","Upside Down","Relaxed","Yum","Relieved","Heart Eyes","Kissing Heart"]

  
  test('1- Emoji List Control', () => {
    emojis.map((element,i) =>{
    let a = screen.getByText(element)
      expect(a)
  })
  });
  

  test('2- Emoji Search Title ', () => {
    expect(title);
  });
  
  test('3- Filter Test ', () => {
    render(<App/>);
    const items = screen.getByTestId("custom-element")
    userEvent.type(items,'Japanese Ogre')
    let ogre = screen.getByText("Japanese Ogre")
    expect(ogre);
  });

  test('4- Copy Test ', () => {
    render(<App/>);
    let joy = screen.getByText("Joy")
    const input = screen.getByTestId("custom-element")
    userEvent.click(joy)
    userEvent.click(input)
    userEvent.type(input,"{ctrl}{v}{/ctrl}{/v}")
    expect(input.values)
  })
  
  

  

})