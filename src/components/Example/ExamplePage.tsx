/**
 * 例題ページ
 *************************************************/
import React, { FC, useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { RadioGroup, Typography, withStyles } from '@material-ui/core';
import moment from 'moment';
import CustomDialog, { useDialog } from 'components/common/CustomDialog';

const ExamplePage: FC<{}> = () => {
  const { dialogProps } = useDialog();
  const [time, setTime] = useState<any>(5000);
  const [pause, setPause] = useState<boolean>(false);

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
      // setInterval(countdown, 1000);
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
    </>
  );
};
export default ExamplePage;
