const FirstQuestionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mt-6 text-center">
      <p>答えてね</p>
      {children}
    </main>
  );
};

export default FirstQuestionLayout;