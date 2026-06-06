const WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

export async function appendLeadToSheet(formData) {
  if (!WEB_APP_URL) {
    throw new Error('Missing VITE_GOOGLE_SHEETS_WEB_APP_URL');
  }

  await fetch(WEB_APP_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      level: formData.level,
      targetField: formData.targetField || '',
      targetRegion: formData.targetRegion || '',
      message: formData.message || '',
      status: 'À contacter',
    }),
  });
}