import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CodeComparisonResponse } from './interfaces/code-comparison-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  // private API_URL = 'http://localhost:8080';
  private API_URL  = environment.baseUrl;

  constructor(private http: HttpClient) { }

  evaluateCode(code: string) {
    return this.http.post<{result: string}>(`${this.API_URL}/evaluateCode`, code);
  }
  produceAHint(code: string, codeChallenge: string | undefined, codeSolution: string | undefined) {
    const payload = {
      code: code,
      codeChallenge: codeChallenge,
      codeSolution: codeSolution
    };
    return this.http.post<{result: string}>(`${this.API_URL}/produceAHint`, payload);
  }

  getBinaryAnswerToCode(code: string, codeChallenge: string | undefined, codeSolution: string | undefined) {
    const payload = {
      code: code,
      codeChallenge: codeChallenge,
      codeSolution: codeSolution
    };
    return this.http.post<CodeComparisonResponse>(`${this.API_URL}/getBinaryAnswerToCode`, payload);
  }

  getSolutionToChallenge(codeChallenge: string | undefined) {
    return this.http.post<{result: string}>(`${this.API_URL}/getSolutionToChallenge`, codeChallenge);
  }
}
