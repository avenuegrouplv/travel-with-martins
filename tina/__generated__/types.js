export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const TranslationsPartsFragmentDoc = gql`
    fragment TranslationsParts on Translations {
  __typename
  header {
    __typename
    home
    collab
    destinations
    faq
    blog
    contacts
    contactBtn
  }
  home {
    __typename
    heroSlides {
      __typename
      title
      text
      highlights
    }
    quickStats {
      __typename
      countries
      projects
      clients
      rating
    }
    aboutBadge
    aboutTitle
    aboutSubtitle
    aboutIntro
    aboutBody
    aboutQuote
    advantagesBadge
    advantagesTitle
    advantages {
      __typename
      title
      desc
    }
    stepsBadge
    stepsTitle
    stepsSubtitle
    steps {
      __typename
      title
      desc
    }
    reviewsBadge
    reviewsTitle
    reviews {
      __typename
      author
      role
      text
    }
    instaTitle
    instaSubtitle
  }
  collab {
    __typename
    badge
    title
    subtitle
    steps {
      __typename
      title
      desc
    }
    bottomText1
    bottomText2
    toHome
  }
  destinations {
    __typename
    toHome
    badge
    title
    subtitle
    filterAll
    filterEurope
    filterExotic
    durationLabel
    viewLabel
    noResults
    resetFilter
    modalClose
    modalDuration
    modalPriceFrom
    modalRequestBtn
    items {
      __typename
      turcija {
        __typename
        name
        description
        duration
        tags
      }
      grie_ija {
        __typename
        name
        description
        duration
        tags
      }
      e_ipte {
        __typename
        name
        description
        duration
        tags
      }
      sp_nija {
        __typename
        name
        description
        duration
        tags
      }
      kipra {
        __typename
        name
        description
        duration
        tags
      }
      taizeme {
        __typename
        name
        description
        duration
        tags
      }
      maldivu_salas {
        __typename
        name
        description
        duration
        tags
      }
      dominikana {
        __typename
        name
        description
        duration
        tags
      }
      aae {
        __typename
        name
        description
        duration
        tags
      }
    }
  }
  faq {
    __typename
    toHome
    badge
    title
    subtitle
    noAnswerTitle
    noAnswerDesc
    askBtn
    items {
      __typename
      question
      answer
    }
  }
  blog {
    __typename
    toHome
    badge
    title
    subtitle
    readMore
    sidebarPopular
    sidebarCategories
    sidebarAll
    posts {
      __typename
      id
      title
      desc
      content
    }
    upcomingTitle
    upcomingSubtitle
    upcomingReadSoon
    upcomingPosts {
      __typename
      title
      desc
    }
  }
  contactPage {
    __typename
    toHome
    badge
    title
    intro
    hoursTitle
    hoursDesc1
    hoursDesc2
    locationTitle
    locationDesc1
    locationDesc2
    supportTitle
    supportDesc1
    supportDesc2
  }
  contactForm {
    __typename
    badge
    title
    subtitle
    successTitle
    successDesc
    sendNew
    labelName
    placeholderName
    labelPhone
    placeholderPhone
    labelEmail
    placeholderEmail
    labelMessage
    placeholderMessage
    submitBtn
    infoTitle
    phone
    email
  }
  footer {
    __typename
    desc
    linksTitle
    contactsTitle
    copyright
  }
  cookieNotice {
    __typename
    text
    accept
    policy
  }
}
    `;
export const DestinationsPartsFragmentDoc = gql`
    fragment DestinationsParts on Destinations {
  __typename
  destinations {
    __typename
    id
    name
    flag
    image
    description
    duration
    price
    tags
  }
}
    `;
export const TranslationsDocument = gql`
    query translations($relativePath: String!) {
  translations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TranslationsParts
  }
}
    ${TranslationsPartsFragmentDoc}`;
export const TranslationsConnectionDocument = gql`
    query translationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TranslationsFilter) {
  translationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TranslationsParts
      }
    }
  }
}
    ${TranslationsPartsFragmentDoc}`;
export const DestinationsDocument = gql`
    query destinations($relativePath: String!) {
  destinations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DestinationsParts
  }
}
    ${DestinationsPartsFragmentDoc}`;
export const DestinationsConnectionDocument = gql`
    query destinationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DestinationsFilter) {
  destinationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DestinationsParts
      }
    }
  }
}
    ${DestinationsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    translations(variables, options) {
      return requester(TranslationsDocument, variables, options);
    },
    translationsConnection(variables, options) {
      return requester(TranslationsConnectionDocument, variables, options);
    },
    destinations(variables, options) {
      return requester(DestinationsDocument, variables, options);
    },
    destinationsConnection(variables, options) {
      return requester(DestinationsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/00000000-0000-0000-0000-000000000000/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
