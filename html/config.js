// Set all the pages of your NUI, you also need to add a div with the same ID as content ID on index.html
const pages = [
  new Page({
    label: 'Home',
    icon: 'home',
    contentId: 'home'
  }),
  new Page({
    label: 'Another',
    icon: 'angry',
    contentId: 'another'
  }),
  new Page({
    label: 'One more',
    icon: 'baby',
    contentId: 'onemore'
  }),
];

// Set the content ID of the default page
const defaultPage = pages[0].contentId;

// Set all types that you want to use on your NUI and their respective callback
const nuiTypes = [
  {
    type: 'open',
    callback: (data) => {
      console.log('NUI opened and received', data);
      openNui();
    }
  },
  {
    type: 'close',
    callback: (data) => {
      console.log('NUI closed and received', data);
      closeNui();
    }
  },
]
