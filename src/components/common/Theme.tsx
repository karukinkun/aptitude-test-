/**
 * サイトテーマ設定
 *************************************************/
import { createMuiTheme } from '@material-ui/core/styles';

export const fontTheme = {
  color: '#656565',
  fontFamily: {
    gothic: [
      '游ゴシック Medium',
      'Yu Gothic Medium',
      '游ゴシック体',
      'YuGothic',
      'ヒラギノ角ゴ ProN W3',
      'Hiragino Kaku Gothic ProN',
      'メイリオ',
      'Meiryo',
      'verdana',
    ].join(','),
    mincho: [
      '游明朝',
      'Yu Mincho',
      'YuMincho',
      'Hiragino Mincho ProN',
      'Hiragino Mincho Pro',
      'HGS明朝E',
      'メイリオ',
      'Meiryo',
      'seri',
    ].join(','),
  },
};

export const currentTheme = () => {
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1620,
      },
    },
    palette: {
      primary: {
        light: '#7DAEF2',
        main: '#3F72BD',
        dark: '#5382C1',
        contrastText: '#ffffff',
      },
      common: {
        black: '#323232',
      },
      background: {
        default: '#F9FAFE',
      },
      divider: '#d6d6d6',
      text: {
        primary: '#494949',
        disabled: '#494949',
      },
      tonalOffset: 0.1,
    },
    shape: {
      borderRadius: 5,
    },
    spacing: 5,
    typography: {
      htmlFontSize: 20,
      fontWeightMedium: 500,
      h1: {
        fontSize: '1.4rem',
        color: fontTheme.color,
      },
      h2: {
        fontSize: '1.3rem',
        color: fontTheme.color,
      },
      h3: {
        fontSize: '1.2rem',
        color: fontTheme.color,
      },
      h4: {
        fontSize: '1.1rem',
        color: fontTheme.color,
      },
      h5: {
        fontSize: '1rem',
        color: fontTheme.color,
      },
      h6: {
        fontSize: '0.9rem',
        color: fontTheme.color,
      },
      caption: {
        fontSize: '0.8rem',
        color: fontTheme.color,
      },
      body2: {
        color: fontTheme.color,
      },
      fontFamily: fontTheme.fontFamily.gothic,
    },
  });
};
