export class ProfileType {
    value: string;
    viewValue: string;

    setValue(value:string)
    {
        this.value=value;
    }

    getValue()
    {
        return this.value;
    }

    setViewValue(viewValue:string)
    {
        this.viewValue=viewValue;
    }

    getViewValue()
    {
        return this.viewValue;
    }
  }