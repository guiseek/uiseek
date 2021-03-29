export class WebrView {
  static async get(source: string) {
    return new Promise<DocumentFragment>(async (resolve, reject) => {
      try {
        if (!source || source === null || undefined) {
          reject('Not found');
        }

        const html = await (await fetch(source)).text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const tmpl = doc.querySelector('template');
        resolve(tmpl.content);
      } catch (err) {
        reject(err);
      }
    });
  }
}
