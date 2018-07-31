import {
  expect
} from 'chai';
import oneRequiredValidation, {
  populateValueData
} from './one-required';

const methods = {
  onChangeField: () => {
  },
  onChangeValidationState: () => {
  }
};

const validationItem = {
  rule: 'oneRequired',
  message: 'Inclua 1',
  fields: [
    'includedSubdepartments'
  ],
  whenFields: [{
    enable: ['scope1p'],
    fieldsCheck: ['includedProducts']
  }]
};
const schema = [{
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Escopo da Campanha',
  slug: 'campaign_scope',
  children: [{
      _type: 'field',
      id: "14",
      columns: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6
      },
      label: '1P',
      component: 'checkbox',
      withoutSpace: true,
      validation: [{
        rule: 'oneRequired',
        message: 'Convide ao menos 1',
        fields: [
          'scope3p'
        ]
      }],
      key: 'scope1p',
      attributes: {

      }
    },
    {
      _type: 'field',
      id: "14",
      columns: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6
      },
      label: '3P',
      component: 'checkbox',
      withoutSpace: true,
      validation: [{
        rule: 'oneRequired',
        message: 'Convide ao menos 1',
        fields: [
          'scope1p'
        ]
      }],
      key: 'scope3p',
      attributes: {

      }
    }
  ]
}, {
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Product',
  children: [{
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [{
          rule: 'number',
          message: 'ID inválido'
        },
        {
          rule: 'oneRequired',
          message: 'Inclua pelo menos 1 departamento ou 1 linha',
          fields: [
            'includedDepartments',
            'includedSubdepartments'
          ]
        }
      ],
      key: 'includedProducts'
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: '',
      options: false,
      validation: [],
      key: 'excludedProducts'
    }
  ]
}, {
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Linha',
  children: [{
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: '',
      options: false,
      validation: [],
      key: 'includedSubdepartments'
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [],
      key: 'excludedSubdepartments'
    }
  ]
}];

const schema2 = [{
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Escopo da Campanha',
  slug: 'campaign_scope',
  children: [{
      _type: 'field',
      id: "14",
      columns: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6
      },
      label: '1P',
      component: 'checkbox',
      withoutSpace: true,
      validation: [{
        rule: 'oneRequired',
        message: 'Convide ao menos 1',
        fields: [
          'scope3p'
        ]
      }],
      value: true,
      key: 'scope1p',
      attributes: {

      }
    },
    {
      _type: 'field',
      id: "14",
      columns: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6
      },
      label: '3P',
      component: 'checkbox',
      withoutSpace: true,
      validation: [{
        rule: 'oneRequired',
        message: 'Convide ao menos 1',
        fields: [
          'scope1p'
        ]
      }],
      key: 'scope3p',
      attributes: {

      }
    }
  ]
}, {
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Product',
  children: [{
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [{
          rule: 'number',
          message: 'ID inválido'
        },
        {
          rule: 'oneRequired',
          message: 'Inclua pelo menos 1 departamento ou 1 linha',
          fields: [
            // 'includedDepartments'
          ],
          whenFields: [
            {
              enable: ['scope1p'],
              fieldsCheck: ['includedDepartments']
            }
          ]
        }
      ],
      key: 'includedProducts',
      value: {
        id: '123',
        value: '123'
      }
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: '',
      options: false,
      validation: [],
      key: 'excludedProducts'
    }
  ]
}, {
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Linha',
  children: [{
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: '',
      options: false,
      validation: [{
        rule: 'number',
        message: 'ID inválido'
      },
      {
        rule: 'oneRequired',
        message: 'Inclua pelo menos 1 departamento ou 1 linha',
        fields: [],
        whenFields: [
          {
            enable: ['scope1p'],
            fieldsCheck: ['includedProducts']
          }
        ]
      }],
      key: 'includedSubdepartments'
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [],
      key: 'excludedSubdepartments'
    }
  ]
}];

const schema3 = [{
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Escopo da Campanha',
  slug: 'campaign_scope',
  children: [{
      _type: 'field',
      id: "14",
      columns: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6
      },
      label: '1P',
      component: 'checkbox',
      withoutSpace: true,
      validation: [{
        rule: 'oneRequired',
        message: 'Convide ao menos 1',
        fields: [
          'scope3p'
        ]
      }],
      value: true,
      key: 'scope1p',
      attributes: {

      }
    },
    {
      _type: 'field',
      id: "14",
      columns: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6
      },
      label: '3P',
      component: 'checkbox',
      withoutSpace: true,
      validation: [{
        rule: 'oneRequired',
        message: 'Convide ao menos 1',
        fields: [
          'scope1p'
        ]
      }],
      key: 'scope3p',
      attributes: {

      }
    }
  ]
}, {
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Product',
  children: [{
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [{
          rule: 'number',
          message: 'ID inválido'
        },
        {
          rule: 'oneRequired',
          message: 'Inclua pelo menos 1 departamento ou 1 linha',
          fields: [
            // 'includedDepartments'
          ],
          whenFields: [
            {
              enable: ['scope1p'],
              fieldsCheck: ['includedDepartments']
            }
          ]
        }
      ],
      key: 'includedProducts'
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: '',
      options: false,
      validation: [],
      key: 'excludedProducts'
    }
  ]
}, {
  _type: 'group',
  id: "3",
  columns: {},
  title: 'Linha',
  children: [{
      _type: 'field',
      id: "31",
      columns: {},
      label: 'Incluindo',
      component: 'suggestionsWithTags',
      placeholder: '',
      options: false,
      validation: [{
        rule: 'number',
        message: 'ID inválido'
      },
      {
        rule: 'oneRequired',
        message: 'Inclua pelo menos 1 departamento ou 1 linha',
        fields: [],
        whenFields: [
          {
            enable: ['scope1p'],
            fieldsCheck: ['includedProducts']
          }
        ]
      }],
      key: 'includedSubdepartments'
    },
    {
      _type: 'field',
      id: "32",
      columns: {},
      label: 'Excluindo',
      component: 'suggestionsWithTags',
      placeholder: 'Adicione 1 número por vez',
      options: false,
      validation: [],
      key: 'excludedSubdepartments'
    }
  ]
}];

/** @test {Validation#OneRequired} */
describe('Validation One Required', () => {
  it('should have parameters VALUE as String, METHODS as Object, VALIDATIONITEM as Object and SCHEMA as Object', () => {
    expect(oneRequiredValidation('test', methods, validationItem, schema)).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters VALUE as String, METHODS as Object, VALIDATIONITEM as Object and SCHEMA as Object', () => {
    expect(oneRequiredValidation(undefined, methods, validationItem, schema2)).to.deep.equal({
      validationState: 'error',
      errorMessage: 'Inclua 1'
    });
  });

  it('should have parameters VALUE as undefined, METHODS as Object, VALIDATIONITEM as Object with value and SCHEMA as Object', () => {
    expect(oneRequiredValidation(undefined, methods, validationItem, schema3)).to.deep.equal({
      validationState: 'error',
      errorMessage: 'Inclua 1'
    });
  });

  it('should populate data from fields', () => {
    const expected = {
      scope1p: undefined,
      scope3p: undefined,
      includedProducts: undefined,
      excludedProducts: undefined,
      includedSubdepartments:undefined,
      excludedSubdepartments: undefined
    };
    expect(populateValueData(schema)).to.deep.equal(expected);
  })
});
