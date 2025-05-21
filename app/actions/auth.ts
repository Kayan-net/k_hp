// Define FormState type or import it from the correct module
import bcrypt from 'bcryptjs';

// Update the import path below if your db file is at 'app/lib/db'
import { db } from '../lib/db';
// Update the import path below to the correct location of your schema file
// For example, if your schema is defined in 'app/lib/db', import from there:
import { user } from '../lib/db'; // Adjust the import path as needed
type FormState = {
  message?: string;
};

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  // Example validation (replace with your actual validation logic)
  const validatedFields = {
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
  }
 
  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10)
 
const data = await db
  .insert(user)
  .values({
    name,
    email,
    password: hashedPassword,
  })
  .returning({ id: user.id });

const createdUser = data[0];

if (!createdUser) {
  return {
    message: 'An error occurred while creating your account.',
  };
}
  }
 
  // TODO:
  // 4. Create user session
  // 5. Redirect user
}