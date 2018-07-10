import React, { Component } from 'react';
import { Field, reduxForm, initialize, SubmissionError } from 'redux-form';

import AppInput from './AppInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    const { dispatch } = props;

    dispatch(
      initialize('testForm', {})
    );
  }

  submit() {
    return Promise.resolve().then(({errors, ...data}) => {
      if (errors) {
          // бросаем экземпляр класса ошибки с текстами ошибок
          // _error общая ошибка для формы
          throw new SubmissionError({ ...errors, _error: 'Зачем это поле!' })
       } else {
          // ошибок нет, обрабатываем данные data
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Field name="email" component={AppInput} type="email" />
        <Field name="password" component={AppInput} type="password" />
        <Field name="repitedPassword" component={AppInput} type="password" />
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (values.password !== values.repitedPassword) {
    errors.repitedPassword = 'passwords do not match';
  }

  return errors;
}

export default reduxForm({
  form: 'testForm',
  validate,
})(App);
