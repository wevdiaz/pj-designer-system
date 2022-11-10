import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";


export function SignIn() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100"> 
      <header className="flex flex-col items-center">
        <Logo /> 
        <Heading className="mt-4" size="lg">Ignite Lab</Heading>   
        <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar!</Text> 
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>

            <TextInput.Input type={"email"} id="email" placeholder="Digite o seu email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>

            <TextInput.Input type={"password"} id="password" placeholder="******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>
        
        <Button className="mt-4" type="submit">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8"> 
        <Text asChild size="sm">          
          <a className="text-gray-400 underline hover:text-gray-200" href="#">Esqueceu sua senha?</a>
        </Text>

        <Text asChild size="sm">          
          <a className="text-gray-400 underline hover:text-gray-200" href="#">Não possui conta? Crie uma agora!</a>       
        </Text>
      </footer>
    </div>
  );
}