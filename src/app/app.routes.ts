import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cat-quiz',
    loadChildren: () =>
      import('./features/quiz/components/cat-quiz/cat-quizz.routes')
        .then(m => m.CAT_QUIZ_ROUTES)
  },
];
