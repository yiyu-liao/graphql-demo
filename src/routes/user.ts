import { Response } from '../models';

export async function register(args) {
    const promise: Promise<Response> = new Promise<Response>((resolve, regject) => {
        const { username } = args.input.username;
        if (!username.trim()) {
            regject(new Response(10001, "Please fill username", {
                success: false
            }))
        }else {
            resolve(new Response(200, "Successful response", {
                success: true
            }))
        }
    })
    return promise;
}

export async function login(args) {
    const promise: Promise<Response> = new Promise<Response>((resolve, regject) => {
        const { username } = args.input.username;
        if (!username.trim()) {
            regject(new Response(10001, "Pletrading_accountase fill username", {
                success: false
            }))
        }else {
            resolve(new Response(200, "Successful response", {
                success: true
            }))
        }
    })
    return promise
}