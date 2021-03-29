export class WebrCustom {
  name: string;
  element: any;
  options?: ElementDefinitionOptions;
}

export class WebrContainer {
  private _container = new Map<string, WebrCustom>();

  constructor(private _proviers: WebrCustom[] = []) {
    this._proviers.forEach((custom) =>
      this._container.set(custom.name, new custom.element())
    );
  }

  get(service: WebrCustom['name']) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('Not provider found');
    }
    return serviceInstance;
  }
}
