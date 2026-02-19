export const bootstrap = (): void => {
  //null
  let title = null;
  console.log('Title: ', title);
  console.log(title ? 'verdadeiro' : 'false');
  console.log('Tipo null: ', typeof title); // bug -> Retorna um objeto

  //undefined
  let subtitle = undefined;
  console.log('Subtitle: ', subtitle);
  console.log(subtitle ? 'verdadeiro' : 'false');
  console.log('Tipo undefined: ', typeof subtitle);

  type Page = {
    title: string;
    subititle?: string;
    handlerPage?: () => void;
  };

  const page: Page = {
    title: 'Curso de TypeScript',
  };
  page.handlerPage = (): void => {
    console.log('executou a função');
  };

  console.log('Page subtitle: ', page.subititle);
  console.log('Page subtitle: ', page.handlerPage);
  console.log('Page subtitle: ', page.handlerPage());
};
