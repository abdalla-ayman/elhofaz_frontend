import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="flex p-3 bg-sky-300">
      <h3 className="mx-4 text-xl">مقارئ الحفاظ</h3>
      {session && (
        <ul className="flex flex-grow justify-end mx-4 items-center">
          <li className="mx-2">
            <button onClick={signOut}>تسجيل الخروج</button>
          </li>
          <li>الصفحة الشخصية</li>
        </ul>
      )}

      {!session && (
        <ul className="flex justify-center">
          <li className="mx-2">
            <Link href={"/auth/login"}> تسجيل الدخول</Link>
          </li>
          <li className="mx-2">
            <Link href={"/auth/register"}> التسجيل</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
