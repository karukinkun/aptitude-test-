/**
 * テストページ
 *************************************************/
import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {
  FormControl,
  InputLabel,
  Grid,
  Input,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  withStyles,
} from '@material-ui/core';
import { pageStyles } from 'components/Login/Styles';
import ActionButton from 'components/common/ActionButton';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from 'graphql/queries';

/* material-uiコンポーネント 既存スタイルの上書き
-------------------------------------------------------------- */
const StyledRadioGroup = withStyles(() => ({
  root: {
    display: 'inline-block',
  },
}))(RadioGroup);

const TestPage: FC<{}> = () => {
  const history = useHistory();
  const pageClass = pageStyles();
  const [conditions, setConditions] = useState<any>({
    question1: null,
    question2: null,
    question3: null,
  });

  /**
   * 検索条件（ボタンフォーム）の選択値をstateにセット */
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, value: string) => {
      const { name } = event.target;
      setConditions({ ...conditions, [name]: value });
    },
    [conditions],
  );

  const submit = useCallback(() => {
    (async () => {
      try {
        console.log(conditions);
      } catch (e) {}
    })();
  }, [conditions]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await API.graphql(graphqlOperation(listTodos));
        console.log('posts');
        console.log('posts: ', posts);
      } catch (e) {
        console.log('ssss');
        console.log(e);
      }
    })();
  }, []);

  return (
    <Box px={40}>
      <Grid container justify="center" alignItems="center" className={pageClass.formInner}>
        {[
          {
            no: 1,
            question:
              '10分ほど休憩で離席しようと考えています。<br/>スクリーンセーバーの時間設定はしていますが、何らかの理由で動作していない事は認識しています。<br/>正しい行動はどれですか？',
            choices: [
              '手動でロックをしてから席を離れる',
              'スクリーンセーバーの時間設定をしているので問題なし',
              'デスクトップの表示状態にして席を離れる',
              '10分なのでそのまま席を離れる',
            ],
          },
          {
            no: 2,
            question:
              '10分ほど休憩で離席しようと考えています。<br/>スクリーンセーバーの時間設定はしていますが、何らかの理由で動作していない事は認識しています。<br/>正しい行動はどれですか？',
            choices: [
              '手動でロックをしてから席を離れる',
              'スクリーンセーバーの時間設定をしているので問題なし',
              'デスクトップの表示状態にして席を離れる',
              '10分なのでそのまま席を離れる',
            ],
          },
        ].map((quiz) => (
          <Grid item xs={12} key={quiz.no}>
            <Box className={pageClass.inputEmail}>
              <Box mb={3}>
                <Typography component="p" variant="h4">
                  <span
                    // 文字列に含まれる<br>タグを認識させるため、文字列をHTMLに変換
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: quiz.question,
                    }}
                  />
                </Typography>
              </Box>
              <FormControl component="fieldset">
                <StyledRadioGroup name="question1" onChange={handleChange}>
                  {quiz.choices.map((choice, index) => (
                    <FormControlLabel value={index} control={<Radio />} label={choice} />
                  ))}
                </StyledRadioGroup>
              </FormControl>
            </Box>
          </Grid>
        ))}
        <Grid item xs={4}>
          <ActionButton onClick={submit} fullWidth color="primary">
            送信
          </ActionButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TestPage;
