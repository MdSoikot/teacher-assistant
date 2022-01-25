export function filesize(size) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    `${(size / (1024 ** i)).toFixed(2) * 1
    } ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`
  );
}

// Transforms key/value pairs to FormData() object
export function toFormData(values = {}, method = 'POST') {
  const formData = new FormData();
  Object.keys(values).forEach(field => formData.append(field, values[field]))

  // NOTE: When working with Laravel PUT/PATCH requests and FormData
  // you SHOULD send POST request and fake the PUT request like this.
  // More info: http://stackoverflow.com/q/50691938
  if (method.toUpperCase() === 'PUT') {
    formData.append('_method', 'PUT');
  }

  return formData;
}

export const uniqId = () => {
  const a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join('')).replace(/\./g, '');
}


export const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ''


