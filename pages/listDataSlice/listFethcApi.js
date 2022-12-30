// A mock function to mimic making an async request for data
export function fethcList(list=[]) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: list }), 500)
    );
  }
  