import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLOR, FONT } from '../../constants/style';
import { NavLink } from 'react-router-dom';
import { ThickNavTwoColumnsPage } from '../../components/Page';
import {
  Column,
  BackgroundColumn,
  Form,
  JoinButton,
  JoinInput,
} from '../../components/general/';
import useLogin from '../../hooks/userHooks/useLogin';
import { useDispatch } from 'react-redux';

const Title = styled.h1`
  color: ${COLOR.text_2};
  font-size: ${FONT.lg};
  font-weight: 400;
  margin-bottom: 30px;
`;

const Description = styled.div`
  color: ${COLOR.text_2};
`;

const RegisterLink = styled(NavLink)`
  display: inline-block;
  color: #488eb2;
  &:hover {
    color: ${COLOR.hover};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: ${COLOR.text_alert};
  font-size: ${FONT.sm};
`;

const Loading = styled.div``;

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    handleInputChange,
    setUsername,
    setPassword,
    togglePassword,
    isPasswordShowed,
    errorMessage,
    isUserLoading,
    handleLogin,
    setErrorMessage,
  } = useLogin();

  useEffect(() => {
    dispatch(setErrorMessage(null));
  }, [dispatch, setErrorMessage]);

  return (
    <>
      <ThickNavTwoColumnsPage>
        <Column>
          <Form>
            <Title>以 Give++ 帳號登入</Title>
            <JoinInput
              title="帳號"
              type="username"
              limit="20"
              handleInputChange={handleInputChange(setUsername)}
            />
            <JoinInput
              title="密碼"
              type="password"
              limit="20"
              linksType="password"
              togglePassword={togglePassword}
              isPasswordShowed={isPasswordShowed}
              handleInputChange={handleInputChange(setPassword)}
            />

            <Description>
              還不是會員嗎？{' '}
              <RegisterLink to={'/register'} children={'立刻註冊新帳號'} />
            </Description>

            {isUserLoading ? (
              <Loading>Loading...</Loading>
            ) : (
              <>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <JoinButton onClick={handleLogin}>登入</JoinButton>
              </>
            )}
          </Form>
        </Column>
        <BackgroundColumn />
      </ThickNavTwoColumnsPage>
    </>
  );
};

export default LoginPage;
