declare module '@kumarshanu/captcha_generator' {
    interface Captcha {
      image: string;
      text: string;
    }
  
    function generate(width: number, height: number, length: number): Captcha;
  
    export default generate;
  }
  