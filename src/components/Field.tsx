interface FieldProps {
  label: string;
  error?: { message?: string };
  children: React.ReactNode;
}

export function Field({ label, error, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error?.message && (
        <span className="text-xs text-red-500">{error.message}</span>
      )}
    </label>
  );
}
