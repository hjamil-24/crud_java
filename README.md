# Full stack application tutorial

The main focus of this tutorial is to learn Spring boot and make it work with
frontend technology like React.js.
The primary database used will be ``postgres``.

In this branch, the focus is on a generic `user information` page that can
run CRUD APIs.

## Future
- [ ] Navigation for update using `useParams` and `navigate`
```
src/
│
├── api/
│   ├── api.js
│   ├── authApi.js
│   └── userApi.js
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── UserForm.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── FormPage.jsx
│
├── hooks/
│   └── useAuth.js
│
├── context/
│   └── AuthContext.jsx
│
├── utils/
│   └── validators.js
│
├── App.jsx
└── main.jsx
```
