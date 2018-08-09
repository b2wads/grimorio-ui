import '../../../internals/test/helper';

import moment from 'moment';
import { datetimeValidation, afterToday } from './datetime';

/** @test {Validation#Datetime} */
describe('Validation Datetime', () => {
  it('should have parameters VALUE as String and MESSAGE as String', () => {
    expect(datetimeValidation('01/01/2017 10:00', 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameter VALUE as Datetime in PT-BR format', () => {
    expect(datetimeValidation('01/01/2017', 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });

  it('should have parameters VALUE and MESSAGE', () => {
    expect(datetimeValidation()).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });

  it('should have parameter MESSAGE', () => {
    expect(datetimeValidation('01/01/2017')).toEqual({
      validationState: 'error',
      errorMessage: undefined
    });
  });

  it('should have parameter type VALUE valid', () => {
    expect(datetimeValidation(null, 'error message')).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });
});

/** @test {Validation#afterToday} */
describe('Validation afterToday', () => {
  it('should have parameters VALUE as String and MESSAGE as String', () => {
    const dateNow = moment().add(1, 'h');

    expect(afterToday(dateNow, {message:'error message'})).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameter VALUE as afterToday in PT-BR format', () => {
    expect(afterToday('31/01/2017', {message:'error message'})).toEqual({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });

  it('should have parameters VALUE and MESSAGE', () => {
    expect(afterToday()).toEqual({
      validationState: 'error',
      errorMessage: 'value is undefined'
    });
  });

  it('should have parameter ItemValidation.MESSAGE', () => {
    expect(afterToday('01/01/2017')).toEqual({
      validationState: 'error',
      errorMessage: 'validationItem is undefined'
    });
  });

  it('should have parameter type VALUE valid', () => {
    expect(afterToday(null, '')).toEqual({
      validationState: 'error',
      errorMessage: 'value is undefined'
    });
  });
});
