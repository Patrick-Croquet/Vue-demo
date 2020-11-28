app.$snotify.confirm('Example body content', 'Example title', {
    timeout: 5000,
    showProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    buttons: [
      {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
      {text: 'No', action: () => console.log('Clicked: No')},
      {text: 'Later', action: (toast) => {console.log('Clicked: Later'); vm.$snotify.remove(toast.id); } },
      {text: 'Close', action: (toast) => {console.log('Clicked: No'); vm.$snotify.remove(toast.id); }, bold: true},
    ]
  });