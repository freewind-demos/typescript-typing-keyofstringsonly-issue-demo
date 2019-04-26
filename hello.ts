type CommonConfig = {
  // Notice: if `statePath` is optional and const `elements` has not provide `statePath`, there will be compilation error
  statePath: string
}

type FormElement = ({
  type: 'checkbox',
  config: {
    checked: boolean
  }
} | {
  type: 'input',
  config: {
    text: string
  }
}) & {
  config: CommonConfig
}

const elements: FormElement[] = [
  {
    type: 'checkbox',
    config: {
      checked: false,
      statePath: 'aa'
    }
  },
  {
    type: 'input',
    config: {
      text: 'hello',
      statePath: 'bb'
    }
  },
]

console.log(elements)
