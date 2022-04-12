import { englishCode, spanishCode } from './LanguageCodes';
interface linkType{
  linkId: string,
  type: string,
  urlSlug: string
}

export function getAboutUsLink(language: string) {
  const resultLink =
    !language || language.toLowerCase() === englishCode.toLowerCase()
      ? `${englishCode.toLowerCase()}/about-us`
      : language && language.toLowerCase() === spanishCode.toLowerCase()
        ? `${spanishCode.toLowerCase()}/acerca-de`
        : '';

  return resultLink;
}

export function resolveContentLink(link: linkType , language: string = englishCode) {
  let resultLink;
  switch (link.type) {
    case 'about_us':
      resultLink = `/${link.urlSlug}`;
      break;

    case 'fact_about_us':
      resultLink = getAboutUsLink(language);
      break;

    case 'article':
      resultLink = `/articles/${link.linkId}`;
      break;

    case 'brewer':
      resultLink = `/brewers/${link.urlSlug}`;
      break;

    case 'cafe':
      resultLink = '/cafes';
      break;

    case 'coffee':
      resultLink = `/coffees/${link.urlSlug}`;
      break;

    case 'office':
      resultLink = '/contacts';
      break;

    case 'home':
      resultLink = '/';
      break;

    default:
      resultLink = '';
      break;
  }

  if (language) {
    resultLink = `/${language.toLowerCase()}${resultLink}`;
  }

  return resultLink;
}
