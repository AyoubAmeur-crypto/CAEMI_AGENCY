const url = "https://script.google.com/macros/s/AKfycbxEedADWpSKfbYQyVIcmKfrBhcI-aN0Ssjct3cURcww7rap6iz0d3XcC7pIYUMVPOhI/exec";

async function test() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        sheetName: 'Sheet1',
        fullName: 'Test',
        email: 'test@test.com',
        phone: '123',
        city: 'Test',
        level: 'Bac',
        targetField: 'Test',
        targetRegion: 'Test',
        message: 'Test',
        status: 'Test'
      })
    });
    console.log(res.status, res.statusText);
    const text = await res.text();
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}

test();
