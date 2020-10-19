/**
 * テストページ
 *************************************************/
import { GraphQLResult } from '@aws-amplify/api';

import React, { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react';
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
import { getCatergory, listCatergorys, listQuizs, listTodos } from 'graphql/queries';
import { GetCatergoryQuery, ListCatergorysQuery, ListQuizsQuery } from 'API';
import moment from 'moment';
import CustomDialog, { useDialog } from 'components/common/CustomDialog';

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
  const { openDialog, dialogProps } = useDialog();
  const [catergory, setCatergory] = useState<any>();
  const [quizs, setQuizs] = useState<any>([]);
  const [time, setTime] = useState<any>(5000);
  const [pause, setPause] = useState<boolean>(false);

  const [timerId, setTimerId] = useState<any>();
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

  useEffect(() => {
    (async () => {
      try {
        const result = (await API.graphql(graphqlOperation(getCatergory, { id: '1' }))) as GraphQLResult<
          GetCatergoryQuery
        >;
        console.log(`API_Respons : ${result}`);
        setCatergory(result.data?.getCatergory);
        setQuizs(result.data?.getCatergory?.quizs?.items);
        console.log(result.data?.getCatergory?.quizs?.items);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  /**
   * メール送信実行
   */
  const btnAction = useCallback(async () => {}, []);

  /**
   * 確認ダイアログを表示
   */
  const openNextDialog = useCallback(() => {
    openDialog({
      title: 'URL通知メールの一括送信',
      content: (
        <>
          現在一覧に表示されている注文情報に対し、URL通知メールを一括送信します。
          <br />
          本当に送信してもよろしいでしょうか？
        </>
      ),
      buttonTitle: '送信',
      action: btnAction,
    });
  }, [openDialog, btnAction]);

  // カウントダウン処理
  const countdown = useCallback(() => {
    setTime((count: number) => count - 1000);
    if (time === 0) {
      setPause(true);
    }
  }, [time]);

  // 1秒ごとにカウントダウン処理を実行
  useEffect(() => {
    if (!pause) {
      setInterval(countdown, 1000);
    }
  }, [countdown, pause]);

  return (
    <>
      <CustomDialog {...dialogProps} />
      <Box bgcolor="primary.main" py={3} textAlign="center">
        <Typography component="p" variant="h4">
          <Box component="span" color="#FFF" fontWeight={700}>
            {`残り時間：${moment(time).format('mm分ss秒')}`}
          </Box>
        </Typography>
      </Box>
      <Box px={40}>
        <Grid container justify="center" alignItems="center">
          {quizs.map((quiz: any) => (
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
                  <StyledRadioGroup name="question" onChange={handleChange}>
                    {quiz.choicesA && <FormControlLabel value={0} control={<Radio />} label={quiz.choicesA} />}
                    {quiz.choicesB && <FormControlLabel value={1} control={<Radio />} label={quiz.choicesB} />}
                    {quiz.choicesC && <FormControlLabel value={2} control={<Radio />} label={quiz.choicesC} />}
                    {quiz.choicesD && <FormControlLabel value={3} control={<Radio />} label={quiz.choicesD} />}
                  </StyledRadioGroup>
                </FormControl>
              </Box>
            </Grid>
          ))}
          <Grid item xs={4}>
            <ActionButton fullWidth color="primary">
              送信
            </ActionButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default TestPage;
