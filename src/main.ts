import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-type"] = "application/json"

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
