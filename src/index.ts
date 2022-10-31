import app from './listen';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `
        Yep this is working 🍺 🎉 
        App listen on port: ${PORT} 🥷
        `
  );
});
