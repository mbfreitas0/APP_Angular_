export class AppConstants {
    //public static get baseServidor(): string { return "http://localhost:4200/"}

    //public static get baseLogin(): string { return this.baseServidor + "http://localhost:4200/login"}

    private baseURL: string = 'http://localhost:3000';

    public static get baseURL(): string { return this.baseURL + "/login" }

}
